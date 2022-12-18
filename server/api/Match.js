const express = require('express')
const matchRouter = express.Router()

require('dotenv').config()
matchRouter.use(express.json())
const Match = require('./../models/Match')

matchRouter.post('/addMatch', (req, res) => {
    const { games, player1, player2 } = req.body

    console.log(games)
    console.log(player1)
    console.log(player2)
    if (games.length < 1) {
        res.json({
            status: "FAILED",
            message: "This match has no games in it :("
        })
    }

    const newMatch = new Match({
        games,
        player1,
        player2
    })

    newMatch.save().then(result => { //saves to database using mongoose
        console.log("Success")
        res.json({
            status: "SUCCESS",
            message: "Saved Match",
            data: result
        })
    }).catch(e => { // error catching
        res.json({
            status: "FAILED",
            message: "Error saving match"
        })
    })


})

module.exports = matchRouter; 