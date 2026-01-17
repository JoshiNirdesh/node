const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: "https://cdn.vectorstock.com/i/1000v/65/80/five-food-groups-isolated-vector-45026580.jpg"
    }
}, { timestamps: true });

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel