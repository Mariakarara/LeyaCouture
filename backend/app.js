import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//Import du fichier de gestion des routes
import router from "./routes/router.js";

//const path = require("path");
//const cors = require("cors");

const app = express();
const port = 5001;

app.use(cookieParser());
app.use(cors("*")); //autorise toutes les origines clients
app.use(express.json()); // parse les requêtes en json
app.use(express.urlencoded({ extended: true })); // mise en place d'un middleware afin de gérer le form data

// vérifier la connection
app.listen(port, () => console.log("Server is running on port" + port));

export default app;
