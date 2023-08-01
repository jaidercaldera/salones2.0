const express = require("express");
const router = express.Router();
const {
  viewDashBoard,
  viewControl,
  viewBloques,
  viewSensores,
  viewHorario,
} = require("../controllers/dashboard.controller");

const {CreateBloque, createSalon} = require("../controllers/bloque_salones.controller")
//Peticiones get
router.get("/IndexBoard", viewDashBoard);
router.get("/Bloques", viewBloques);
router.get("/Horarios", viewHorario);
router.get("/Control", viewControl);
router.get("/Sensores", viewSensores);


router.post("/createBloque", CreateBloque);
router.post("/createSalon", createSalon);
module.exports = router;
