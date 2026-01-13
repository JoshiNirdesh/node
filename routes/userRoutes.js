const express = require("express");
const { getUserController, udpdateUserController, updatePasswordController, deleteUserController } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");


const router = express.Router();
router.get("/getuser", authMiddleware, getUserController);
router.post("/updateuser", authMiddleware, udpdateUserController)
router.post("/updatepassword", authMiddleware, updatePasswordController)
router.delete("/deleteuser/:id", authMiddleware, deleteUserController)


module.exports = router