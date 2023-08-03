const dashBoardCtrl = {};

dashBoardCtrl.viewDashBoard = (req, res) => {
  res.cookie("bloque", "");
  res.render("dashboard");
};



dashBoardCtrl.viewControl = (req, res) => {
  res.send("control");
};

dashBoardCtrl.viewHorario = (req, res) => {
  res.send("Horario");
};

dashBoardCtrl.viewSensores = (req, res) => {
  res.send("Sensores");
};


module.exports = dashBoardCtrl;
