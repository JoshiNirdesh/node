const { default: mongoose } = require("mongoose");
const userModel = require("../models/userModel")
const bcrypt = require("bcrypt");

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
module.exports = registerController