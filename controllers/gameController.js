const Game = require("../models/Game")

const GetGames = async (req, res) => {
  try {
    const games = await Game.find({})
    res.send(games)
  } catch (error) {
    throw error
  }
}

module.exports = { GetGames }
