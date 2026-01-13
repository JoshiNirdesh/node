const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbconfig");
const app = express();

dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is home page");
})
connectDb();

app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/user", require("./routes/userRoutes"))

const port = process.env.port

app.listen(port, () => {
    console.log(`Listening on PORT:${port}`)
})