const express = require("express");
const app = express();
const path = require("path");

const cors = require("cors");

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// création de que quelque middlewere
// mise en place d'un middleware afin de gérer le form data
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

// middleware pour le json
app.use(express.json());

// gestion des fichiers statiques
app.use(express.static(path.join(__dirname, "/public")));
// load router
const router = require("./routes/router");

app.use(router);

// ready to export
module.exports = app;
