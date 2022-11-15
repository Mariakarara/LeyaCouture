//ajout des dépendances du serveur avec express/cors

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const path = require("path");
const { routes } = require("./routes/router");

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

const allRoutes = require("./routes/router");

app.use("/category", categoryController.browse);

app.listen(port, () => console.log("server is running port" + 5000));
