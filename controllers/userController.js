const userModel = require("../models/userModel")

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
module.exports = { getUserController, udpdateUserController }