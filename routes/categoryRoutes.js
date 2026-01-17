const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { createCategoryController, getAllCategoryController, updateCategoryController } = require("../controllers/categoryController");

const router = express.Router();

router.post("/create", authMiddleware, createCategoryController);

router.get("/getAll", getAllCategoryController);

router.patch("/update/:id", updateCategoryController);

module.exports = router