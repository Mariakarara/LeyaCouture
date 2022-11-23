import express from "express";

import { categoryController } from "../controllers";

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.get);
router.post("/", categoryController.create);
router.put("/", categoryController.update);
router.delete("/", categoryController.delete);

export default router;
