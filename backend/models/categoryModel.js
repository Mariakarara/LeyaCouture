import dbConnect from "../config/db-config.js";

export const getAll = () => {
  return new Promise((resolve, reject) => {
    dbConnect.query(`SELECT * FROM category where id = ?`, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};
