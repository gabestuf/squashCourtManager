require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors')

// middleware
const MatchRouter = require('./api/Match')
const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const connectDB = require("./config/dbConn");

const bodyParser = require('express').json;
app.use(bodyParser())
app.use(express.json())
app.use(cors())
app.use('/match', MatchRouter)

// INIT

// connect to database, ASK ME FOR THE ENV VARIABLES OR THIS WILL NOT WORK!!,
// if you do not need to test w/ database then comment out this code
// uncomment last comment (app.listen)
connectDB();

const db = mongoose.connection;
db.on("error", (error) => {
    console.error(error);
});
db.once("open", () => {
    console.log("Connected to database");
    app.listen(process.env.PORT || 3000, () =>
        console.log(`Server Started on Port ${process.env.PORT || 3000}`)
    );
});

// app.listen(3000, () => console.log('Server Started on Port 3000'));
