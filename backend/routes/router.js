import express from "express";

import { categoryController } from "../controllers/categoryController.js";

export const setupRoutes = (app) => {
  app.use("/category", categoryController);
};
