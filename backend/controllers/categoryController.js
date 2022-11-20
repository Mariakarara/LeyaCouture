import categoryModel from "../models/categoryModel.js";

const categoryController = {
  getAllCategory: (req, res) => {
    res.json(categoryModel.categoryProduct);
  },
};
export default categoryController;
