const { default: mongoose } = require("mongoose");
const userModel = require("../models/userModel")
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken")

const registerController = async (req, res) => {
    try {
        const { username, email, password, phone, address } = req.body

        if (!username || !email || !password || !phone || !address) {
            return res.status(500).send({
                success: false,
                message: "All fields are required"
            })
        }
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(500).send({
                success: false,
                message: "User Already Exist"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = await userModel.create({ username, email, password: hashPassword, phone, address });
        res.status(200).send({
            success: true,
            message: "Register Successfully",
            newUser
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Register API error",
            error: error.message
        })
    }
}
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "Email Or Password Required"
            })
        }
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(500).send({
                success: false,
                message: "User Not found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: "Password is Incorrect"
            })
        }
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(200).send({
            success: true,
            message: "Login Successfully",
            token,
            user
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Login API Error",
            error: error.message
        })
    }
}
module.exports = { registerController, loginController }