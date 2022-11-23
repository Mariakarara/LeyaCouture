import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//Import du fichier de gestion des routes

//const path = require("path");
//const cors = require("cors");

const app = express();
const port = 5001;

app.use(cookieParser());
app.use(cors("*")); //autorise toutes les origines clients
app.use(express.json()); // parse les requêtes en json
app.use(express.urlencoded({ extended: true })); // mise en place d'un middleware afin de gérer le form data

app.use((req, res, next) => {
  res.setHeader("Access-Controll-Allow-Origin", "*");
  res.setHeader(
    "Access-Controll-Allow-Headers",
    "Origin,X-Requested-With,Content,Accept,Content-Type,Authorization"
  );
  res.header("Access-Controll-Allow-Methods", "GET,POST,PUT,DELETE");
  next();
});
// vérifier la connection

// Serveur est routée grâce à cette ligne

app.listen(process.env.PORT, () =>
  console.log("Server is running on port" + port)
);

export default app;
