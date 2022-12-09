const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// 

const MatchSchema = new Schema({
    type: String,
    games: String,
    player1: String,
    player2: String,
    winner: String
})

const Match = mongoose.model('Match', MatchSchema)

module.exports = Match;