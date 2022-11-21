const router = require("express").Router();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

router.get("/category", async (req, res, next) => {
  try {
    const category = await prisma.category.findMany({});
    res.json(category);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
