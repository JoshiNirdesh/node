const resturantModel = require("../models/resturantModel");

const createResturantController = async (req, res) => {
    try {
        const { title, imageUrl, foods, time, pickup, delivery, isOpen, logoUrl, rating, ratingCount, code, coords } = req.body;

        if (!title || !coords) {
            return res.status(500).send({
                success: false,
                message: "Please Provide title or address"
            })
        }

        const newResturant = new resturantModel({ title, imageUrl, foods, time, pickup, delivery, isOpen, logoUrl, rating, ratingCount, code, coords })
        await newResturant.save();

        res.status(200).send({
            success: true,
            message: "New Resturant Created successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Create resturant api error",
            error: error.message
        })
    }
}
const getAllController = async (req, res) => {
    try {
        const resturants = await resturantModel.find({});
        if (!resturants) {
            return res.status(500).send({
                success: false,
                message: "No resturant Available"
            })
        }
        res.status(200).send({
            success: true,
            totalCount: resturants.length,
            resturants
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "GetAll controller API error",
            error
        })
    }

}
const getResturantController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(500).send({
                success: false,
                message: "Please provide id"
            })
        }
        const resturant = await resturantModel.findById(id);
        if (!resturant) {
            return res.status(500).send({
                success: false,
                message: "No Resturants are available"
            })
        }
        res.status(200).send({
            success: true,
            message: "Resturant",
            resturant
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Get Resturant API error",
            error
        })
    }

}
module.exports = { createResturantController, getAllController, getResturantController }