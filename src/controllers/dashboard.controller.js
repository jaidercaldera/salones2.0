const dashBoardCtrl = {};

dashBoardCtrl.viewDashBoard = (req, res) => {
  res.render("dashboard");
};

dashBoardCtrl.viewBloques = (req, res) => {
  res.send("Salones");
};

dashBoardCtrl.viewControl = (req, res) => {
  res.send("Control");
};

dashBoardCtrl.viewHorario = (req, res) => {
  res.send("Horario");
};

dashBoardCtrl.viewSensores = (req, res) => {
  res.send("Sensores");
};

module.exports = dashBoardCtrl;
