import dbConnect from "../config/db-config.js";

const categoryProduct = {
  getAll: async () => {
    const result = await dbConnect.query(`SELECT * FROM category `);
    return result[0];
  },
};
export default categoryProduct;
