import categoryController from "../controllers/categoryController.js";

const setupRoutes = (app) => {
  app.use("/category", categoryController);
  /*const express = require("express");
const router = express.Router();

// middleware that is specific to this router
const { categoryController } = require("../controllers");

router.getAll("/category", categoryController.browse);
module.exports = router; */
};

export default setupRoutes;
