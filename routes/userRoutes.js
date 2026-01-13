const express = require("express");
const { getUserController, udpdateUserController } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");


const router = express.Router();
router.get("/getuser", authMiddleware, getUserController);
router.get("/updateuser", authMiddleware, udpdateUserController)
module.exports = router