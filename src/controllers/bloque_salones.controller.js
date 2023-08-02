const { model } = require("mongoose");
const Bloque= require("../models/Bloque");
const Salon= require("../models/Salon");
const bloque_salonesCTRL= {};



bloque_salonesCTRL.CreateBloque = async (req,res) =>{
    try {
        const{bloque} = req.body;
        const nuevoBloque = await Bloque.create({bloque});
        console.log(nuevoBloque.bloque);
        res.redirect("/Bloques");
    } catch (error) {
        console.log("Error");
    }
};

bloque_salonesCTRL.createSalon = async (req,res) =>{
    try {
        const{salon, bloque} = req.body;
        const bloqueREF= await Bloque.findOne({bloque : bloque});
        const nuevoSalon = await Salon.create({salon,bloque});
        await Bloque.findByIdAndUpdate(bloqueREF._id,{$push: { salones: nuevoSalon._id}});
        console.log(nuevoSalon.salon);
        res.redirect("/IndexBoard");
    } catch (error) {
        console.log("Error");
    }
};

bloque_salonesCTRL.addBloque =(req,res)=>{
    res.render("./admin/addBloque");
};

bloque_salonesCTRL.viewBloques = async (req, res) => {
    try {
        const bloquesEncontrados = await Bloque.find({}).lean().exec();
        console.log(bloquesEncontrados[0].bloque);
        // Aplicar el paquete para permitir el acceso a propiedades del prototipo
        res.render("./admin/bloques", {bloquesEncontrados });
    } catch (error) {
        console.log(error);
        res.send("Error en la busqueda de bloques");
    }
    
  };

bloque_salonesCTRL.viewSalones =async (req,res)=>{
    
    try {
        const bloque= req.params.bloque;
        const bloqueformat= bloque.substring(1);
        console.log(bloqueformat);
        const modelBloque =await Bloque.findOne({bloque: bloqueformat});
        const Salones= modelBloque.salones;
        console.log(Salones);
        const SalonesEncontrados= await Salon.find({_id : {$in : Salones}}).lean().exec()
        console.log(SalonesEncontrados)
        res.render("./admin/salones", {SalonesEncontrados});
    } catch (error) {
        console.log(error);
    }
    
};
module.exports = bloque_salonesCTRL;