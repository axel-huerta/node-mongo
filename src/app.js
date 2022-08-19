import express from "express";
import moduleName from "express-handlebars"
import indexRoutes from "./routes/index.routes"
import path from "path"//tuta(concatenar sin barra)

const app = express();
app.set("views", path.join(__dirname, "views"))//ruta absoluta _dirname
app.engine(".hbs",
    exphbs({
        layoutDir: path.join(app.get("views"), "layouts"), 
        defaultLayout:"main",
        extname: ".hbs",
    })
);
app.set("viwes engine", ".hbs")
//routes
app.use(indexRoutes);

export default app;