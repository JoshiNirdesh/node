const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username required"],
    },
    email: {
        type: String,
        required: [true, "Email required"],
        unique:true
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    phone: {
        type: String,
        required: [true, "Phone number required"]
    },
    address: {
        type: Array
    },
    userType: {
        type: String,
        required: true,
        default: "client",
        enum: ["client", "admin", "merchant", "driver"]
    }
}, { timestamps: true });

const userModel = mongoose.model("user", userSchema);
modeule.exports = userModel