const Salon= require("../models/Salon");
horarios_CTRL = {};

horarios_CTRL.renderSalones = async(req,res) =>{
    try {
        const salon= req.params.salon;
        const salonformat= salon.substring(1);
        res.cookie("salon", salonformat);
        console.log(salonformat);
        const modelSalon =await Salon.findOne({salon: salonformat}).lean().exec();
        const horario= modelSalon.horario;
        console.log(horario);
        res.render("./horarios/horarioSalon", {horario});
    } catch (error) {
        console.log(error);
    }
};

horarios_CTRL.UpdateSalon = async(req,res) =>{
    try {
        const salon = req.cookies.salon;
        const HorarioActualizado = req.body.HorarioActualizado;
        await Salon.updateOne({salon: salon},{$set: {horario: HorarioActualizado}});
        res.redirec("/Bloques");
    } catch (error) {
        console.log("Error");
    }
};

module.exports = horarios_CTRL;