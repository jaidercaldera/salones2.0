const express = require("express");
const router = express.Router();
const {
  viewDashBoard,
  viewControl,
  viewSensores,
  viewHorario,
} = require("../controllers/dashboard.controller");

const {CreateBloque, createSalon, viewBloques, viewSalones, addBloque, addSalon} = require("../controllers/bloque_salones.controller");

const {renderSalones, UpdateSalon} = require("../controllers/horarios.controller");
//Peticiones get
router.get("/IndexBoard", viewDashBoard);
router.get("/Bloques", viewBloques);
router.get("/Horarios", viewHorario);
router.get("/Control", viewControl);
router.get("/Sensores", viewSensores);
router.get("/Bloques/Salones/bloque:bloque", viewSalones );
router.get("/addBloque", addBloque);
router.get("/addSalon/bloque:bloque", addSalon);
router.get("/Bloques/Salones/Horario/salon:salon", renderSalones);


//peticiones post
router.post("/createBloque", CreateBloque);
router.post("/createSalon", createSalon);
router.post("/Salon/Update", UpdateSalon)
module.exports = router;
