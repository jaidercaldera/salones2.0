//Importacion de los modulos necesarios para el server
import express from "express";
import exphbs from "express-handlebars";
import path from "path";

//Declarando la contante que contiene nuestro servidor
const app = express();

//Estableciendo la direccion de las vistas
app.set("views", path.join(__dirname, "views"));
//Configurando el gestor de plantilla
app.engine(
    ".hbs",
    exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    exmane: ".hbs",
    })
);

//Estableciendo el uso de hbs
app.set("view engine", ".hbs");

//Exportando el servidor
export default app;