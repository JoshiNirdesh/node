const express = require("express");
const createResturantController = require("../controllers/resturantController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, createResturantController)

module.exports = router