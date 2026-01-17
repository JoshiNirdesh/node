const categoryModel = require("../models/categoryModel");

const createCategoryController = async (req, res) => {
    try {
        const { title, imageUrl } = req.body;

        if (!title) {
            return res.status(500).send({
                success: false,
                message: "Title "
            })
        }
        const newCategory = new categoryModel({ title, imageUrl });
        await newCategory.save();

        res.status(200).send({
            success: true,
            message: "Category Created Successfully",
            newCategory
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Create Category api error",
            error
        })
    }
}
const getAllCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({});
        if (!category) {
            return res.status(500).send({
                success: false,
                message: "Category not found"
            })
        }
        res.status(200).send({
            success: true,
            totalCategory: category.length,
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "GetAll Category api error"
        })
    }
}
module.exports = { createCategoryController, getAllCategoryController }