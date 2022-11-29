import express from "express";
const router = express.Router();

import categoryController from "../controllers/categoryController.js";

app.get("/category", categoryController, getAll);
/*app.get("/:id", categoryController, get);
app.post("/", categoryController, create);
app.put("/:id", categoryController, update);
app.delete("/:id", categoryController, delete);*/

export default router;
