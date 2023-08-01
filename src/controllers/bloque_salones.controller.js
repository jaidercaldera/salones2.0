const Bloque= require("../models/Bloque");
const Salon= require("../models/Salon");
const bloque_salonesCTRL= {};

bloque_salonesCTRL.CreateBloque = async (req,res) =>{
    try {
        const{bloque} = req.body;
        const nuevoBloque = await Bloque.create({bloque});
        console.log(nuevoBloque.bloque);
        res.redirect("/IndexBoard");
    } catch (error) {
        console.log("Error");
    }
};

bloque_salonesCTRL.createSalon = async (req,res) =>{
    try {
        const{salon, sensores} = req.body;
        const nuevoSalon = await Salon.create({salon,sensores});
        console.log(nuevoSalon.salon);
        res.redirect("/IndexBoard");
    } catch (error) {
        console.log("Error");
    }
}

module.exports = bloque_salonesCTRL;