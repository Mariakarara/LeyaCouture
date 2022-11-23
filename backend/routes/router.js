import express from "express";
const router = express.Router();

import categoryController from "../controllers/categoryController.js";

router.use("/category", categoryController);
router.get("/:id", categoryController, get);
router.post("/", categoryController, create);
router.put("/:id", categoryController, update);
router.delete("/:id", categoryController, delete);

export default router;
