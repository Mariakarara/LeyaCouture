//ajout des dépendances du serveur avec express/cors

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { setupRoutes } from "./routes/router.js";

//Import du fichier de gestion des routes
//import { setupRoutes } from "./routes/router.js";

const app = express();
const port = 5000;

app.use(cookieParser());

//configuration du serveur
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
); //autorise toutes les orgines du client
app.use(express.json()); // parse les requêtes en json
app.use(express.urlencoded({ extended: true })); //parse les requêtes en urlencoded

//Serveur est routé grâce à cette ligne
//const router = require("./routes/router");

//app.use(router);

//router.get("/", function (req, res) {
// res.send("root");
//});
setupRoutes(app);

app.listen(port, () => console.log("server is running port" + 5000));

module.exports = app;
