const mongoose = require("mongoose")

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
  },
})

const Player = mongoose.model("Player", playerSchema)
module.exports = Player
