const express = require('express')
const userRouter = express.Router()

// INIT
require('dotenv').config()
userRouter.use(express.json())



//mongoDB User model
const User = require('./../models/User')

//Routes
// addUser
userRouter.post('/addUser', (req, res) => {

    let { username } = req.body;
    username = username.trim()

    // User & Pass are ok!!
    User.find({ username }).then(result => { //Check if user already exists
        if (result.length) { // If a result is returned that isn't empty, it means it found the user ie they already exist
            res.json({
                status: "FAILED",
                message: "User already exists"
            })
        } else { // Passed all checks, this is a new user
            const newUser = new User({ //create a new user (mongoose.model)
                username: username,
                elo: 0
            })

            newUser.save().then(result => { //saves to database using mongoose
                res.json({
                    status: "SUCCESS",
                    message: "Signup successful",
                    data: result
                })
            }).catch(e => { // error catching
                res.json({
                    status: "FAILED",
                    message: "Error saving user account"
                })
            })
        }
    }).catch(e => { // even more error catching
        console.error(e);
        res.json({
            status: "FAILED",
            message: "Error creating user"
        })
    })
}
)
// get list of users
userRouter.get('/getUsers', (req, res) => {


    User.find()
        .then(data => {
            if (data.length) {  // checking if there is data
                console.log(data[0])
                res.json({
                    status: "SUCCESS",
                    message: "Found users",
                    username: data[0].username,
                    data: data.map(user => ({
                        username: user.username,
                        elo: user.elo
                    }))
                })
            } else {
                res.json({
                    status: "FAILED",
                    message: "No data"
                })
            }
        })
        .catch(e => { // could not find users in database
            res.json({
                status: "FAILED",
                message: "An error occured while checking for users"
            })
        })

})



module.exports = userRouter; 