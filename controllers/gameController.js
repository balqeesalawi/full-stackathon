const Game = require("../models/Game")

const GetGames = async (req, res) => {
  try {
    const games = await Game.find({})
    res.send(games)
  } catch (error) {
    throw error
  }
}

const GetGameId = async (req, res) => {
  try {
    const game = await Game.findById(req.params.gameId)
    res.send(game)
  } catch (error) {
    throw error
  }
}

module.exports = { GetGames, GetGameId }
