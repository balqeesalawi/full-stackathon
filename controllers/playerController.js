const Player = require("../models/Player")

const GetPlayers = async (req, res) => {
  try {
    const players = await Player.find({})
    res.send(players)
  } catch (error) {
    throw error
  }
}

const GetPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.player_id)
    res.send(player)
  } catch (error) {
    throw error
  }
}

const CreatePlayer = async (req, res) => {
  try {
    const player = await Player.create({ ...req.body })
    res.send(player)
  } catch (error) {
    throw error
  }
}

const UpdatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(
      req.params.player_id,
      req.body,
      { new: true }
    )
    res.send(player)
  } catch (error) {
    throw error
  }
}

const DeletePlayer = async (req, res) => {
  try {
    await Player.deleteOne({ _id: req.params.player_id })
    res.send({
      msg: "Player Deleted",
      payload: req.params.player_id,
      status: "Ok",
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPlayers,
  CreatePlayer,
  UpdatePlayer,
  DeletePlayer,
  GetPlayerById,
}
