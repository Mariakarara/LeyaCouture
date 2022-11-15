const express = require("express");
const router = express.Router();

const { categoryController } = require("./controllers");

router.getAll("/category", categoryController.browse);
module.exports = router;
