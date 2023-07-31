const express = require("express");
const router = express.Router();
const { vistaPrincipal, singUp, register, login } = require("../controllers/index.controller");

//Peticiones get
router.get("/", vistaPrincipal);
router.get("/singUp", singUp)

//Peticiones post 
router.post("/singUp", register)
router.post("/", login)

module.exports = router;
