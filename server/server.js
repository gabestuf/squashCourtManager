require("dotenv").config();
const express = require("express");
const app = express();
// middleware
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");

// INIT

// connect to database, ASK ME FOR THE ENV VARIABLES OR THIS WILL NOT WORK!!,
// if you do not need to test w/ database then comment out this code
// uncomment last comment (app.listen)
// connectDB();

// const db = mongoose.connection;
// db.on("error", (error) => {
//   console.error(error);
// });
// db.once("open", () => {
//   console.log("Connected to database");
//   app.listen(process.env.PORT || 3000, () =>
//     console.log(`Server Started on Port ${process.env.PORT || 3000}`)
//   );
// });

// app.listen(3000, () => console.log('Server Started on Port 3000'));
