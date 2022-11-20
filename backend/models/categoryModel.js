import migrate from "../migrate.js";

const categoryProduct = {
  getAll: async () => {
    const result = await connection.query(`SELECT * FROM category`);
    return result[0];
  },
};
export default categoryProduct;
