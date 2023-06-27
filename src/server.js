const express = require("express");
const exphbs = require("express-handlebars");
//const { model } = require("mongoose");
const path = require("path");
const morgan = require("morgan");

//import indexRoutes from "./routes/index.routes";

//Declarando la contante que contiene nuestro servidor
const app = express();

//Estableciendo la direccion de las vistas
app.set("views", path.join(__dirname, "views"));
//Configurando el gestor de plantilla

app.engine(
  "hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

//Estableciendo el uso de hbs
app.set("view engine", ".hbs");

//Estableciendo la careta con los recusos publicos
app.use(express.static(path.join(__dirname, "public")));
//Exportando el servidor

//Uso de las rutas
app.use(require("./routes/index.routes"));

//Estableciendo uso de morgan
app.use(morgan("dev"));
module.exports = app;
