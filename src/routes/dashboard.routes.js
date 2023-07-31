const express = require("express");
const router = express.Router();
const {viewDashBoard} = require("../controllers/dashboard.controller")
//Peticiones get
router.get("/IndexBoard", viewDashBoard);

module.exports = router;