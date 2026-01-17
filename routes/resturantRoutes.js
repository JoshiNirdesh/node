const express = require("express");
const { createResturantController, getAllController, getResturantController, deleteResturantController } = require("../controllers/resturantController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, createResturantController)
router.get("/getAll", getAllController)
router.get("/get/:id", getResturantController)
router.delete("/delete/:id", deleteResturantController)

module.exports = router