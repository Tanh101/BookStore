const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author");

//config to read env file
dotenv.config();

app.use(bodyParser.json({limit:"50mb"}));
app.use(morgan("common"));
app.use(cors())

// connect db
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Connected to MongoDB")
})


//ROUTE("")
app.use("/v1/author", authorRoute);


app.listen(3000, () => {
    console.log("Server is running...");
})