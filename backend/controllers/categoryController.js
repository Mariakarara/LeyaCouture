import express from "express";
import categoryModel from "../models/categoryModel.js";

const categoryController = {
  getCategory: async (req, res) => {
    try {
      const category = await categoryModel.getAll();
      console.log("Category", category);
      res.status(200).json(category);
    } catch (err) {
      res.status(500).send(" Error server, try again !");
    }
  },
};
export default categoryController;
