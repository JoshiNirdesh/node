const { response } = require("express");
const JWT = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: "Unauthorized user"
                })
            }
            else {
                req.userId = decode.id
                next()

            }
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Token not Provided",
            error: error.message
        })
    }
}