const userModel = require("../models/userModel")
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken")

const getUserController = async (req, res) => {
    try {

        const user = await userModel.findById({ _id: req.userId })
        if (!user) {
            return res.status(500).send({
                success: false,
                message: "User Not Found"
            })
        }
        user.password = undefined
        res.status(200).send({
            success: true,
            message: "User Details",
            user
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Get user API error",
            error: error.message
        })
    }
}
const udpdateUserController = async (req, res) => {
    try {
        const user = await userModel.findById({ _id: req.userId });

        if (!user) {
            return res.status(500).send({
                success: false,
                message: "User not found"
            })
        }
        const { username, address, phone } = req.body
        if (username) user.username = username
        if (address) user.address = address
        if (phone) user.phone = phone
        await user.save();

        res.status(200).send({
            success: true,
            message: "Updated Successfully"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Update API error",
            error: error.message
        })
    }

}
const updatePasswordController = async (req, res) => {
    try {
        const user = await userModel.findById({ _id: req.userId });

        if (!user) {
            return res.status(500).send({
                success: false,
                message: "User not found"
            })
        }
        const { oldPassword, newPassword } = req.body

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: "Old password doesnot match"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, salt);
        user.password = hashPassword
        await user.save();
        res.send(200).send({
            success: true,
            message: "Password reset successfully"
        })
    } catch (error) {
        res.send(500).send({
            success: false,
            message: "Update Password API error",
            error: error.message
        })
    }
}
const deleteUserController = async (req, res) => {
    try {
        await userModel.findByIdAndDelete({ _id: req.params.id })
        res.status(200).send({
            success: true,
            message: "Deleted User Successfully",
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Delete User Api error",
            error: error.message
        })

    }
}
module.exports = { getUserController, udpdateUserController, updatePasswordController, deleteUserController }