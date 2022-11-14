import mysql from "mysql2";
import dotenv from "dotenv";

//permet de récupérer les variables d'environment les variables qui permettent de se connecter à la base de données)
dotenv.config(process.cwd(), ".env");

const dbConnect = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//Test de la connection à la base de données
dbConnect.connect((err) => {
  if (err) console.log("mysql connection error: ", err);
  else console.log("mysql is connected successfully");
});

export default dbConnect;
