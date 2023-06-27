const express = require("express");
const router = express.Router();

const { vistaPrincipal } = require("../controllers/index.controller");

router.get("/", vistaPrincipal);

module.exports = router;
