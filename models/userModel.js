const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username required"]
    },
    email: {
        type: String,
        required: [true, "Email required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    phone: {
        type: String,
        required: [true, "Phone Number required"]
    },
    address: {
        type: Array,
    },
    userType: {
        type: String,
        required: [true, "UserType required"],
        default: "client",
        enum: ["client", "admin", "merchant", "driver"],
    },
    profile: {
        type: String,
        default: "https://cdn-icons-png.freepik.com/512/8608/8608769.png"
    }
}, { timestamps: true })

const userModel = mongoose.model("user", userSchema);
module.exports = userModel