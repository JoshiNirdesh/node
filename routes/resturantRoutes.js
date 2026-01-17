const express = require("express");
const { createResturantController, getAllController } = require("../controllers/resturantController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, createResturantController)
router.get("/getAll", getAllController)

module.exports = router