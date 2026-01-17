const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { createCategoryController, getAllCategoryController } = require("../controllers/categoryController");

const router = express.Router();

router.post("/create", authMiddleware, createCategoryController);

router.get("/getAll", getAllCategoryController);

module.exports = router