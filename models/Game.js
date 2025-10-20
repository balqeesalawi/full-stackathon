const mongoose = require("mongoose")

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
  },
})

const Game = mongoose.model("Game", gameSchema)
module.exports = Game
