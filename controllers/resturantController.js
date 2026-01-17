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
module.exports = createResturantController