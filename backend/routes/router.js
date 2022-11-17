import express from "express";
import categoryController from "../controllers/categoryController.js";

const router = express.Router();

/*export const setupRoutes = (app) => {
  app.use("/category", categoryController);
};*/
router.get("/category", categoryController.getCategory);

export default router;
