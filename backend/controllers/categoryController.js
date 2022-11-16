import express from "express";
import categoryModel from "../models/categoryModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const category = await categoryModel
      .getAll()
      .res.stutus(200)
      .json(category);
  } catch (err) {
    res.status(500).send(" Error server, try again !");
  }
});

export default router;
