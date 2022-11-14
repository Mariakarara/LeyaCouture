//Import des dépendances du serveur avec express/cors
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

//Import du fichier de gestion des routes
//import { setupRoutes } from "./routes/router.js";

const app = express();
const port = 5000;

app.use(cookieParser());

//configuration du serveur
app.use(cors("*")); //autorise toutes les orgines du client
app.use(express.json()); // parse les requêtes en json
app.use(express.urlencoded({ extended: true })); //parse les requêtes en urlencoded

//Serveur est routé grâce à cette ligne
setupRoutes(app);

app.listen(port, () => console.log("server is running port" + 5000));
