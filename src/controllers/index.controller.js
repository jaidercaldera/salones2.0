const indexCtrl = {};
const Users = require("../models/Users.js");
const bcrypt = require("bcryptjs");
const createAccessToken = require("../helpers/jwt.js");
const { token } = require("morgan");
const { sign } = require("jsonwebtoken");
indexCtrl.vistaPrincipal = (req, res) => {
  res.render("singin");
};

indexCtrl.singUp = (req,res) =>{
  res.render("singup");
};
indexCtrl.register = async (req,res) =>{
  const{name, email, password} = req.body;
  try {
    const passwordHash= await bcrypt.hash(password,10);
    const newUser = new Users({
      name,
      email,
      password: passwordHash
    }); 
    const Usersaved= newUser.save();
    await createAccessToken({id: (await Usersaved)._id})
    res.cookie("token", token);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({message: error.message});
    console.log(error);
  }
  
};
indexCtrl.login = async(req,res) => {
  const {email, password} = req.body;
  try {
    const userFound= await Users.findOne({email});
    if (!userFound) res.redirect("/"); 
    const isMatch= await bcrypt.compare(password, userFound.password);
    if (!isMatch)  res.redirect("/")
    await createAccessToken({id: userFound.id})
    res.cookie("token", token);
    res.redirect("/IndexBoard")
  } catch (error) {
    res.status(500).json({message: error.message});
    console.log(error);
  }

};

module.exports = indexCtrl;
