const mongoose = require("mongoose")
const Game = require("../models/Game")
require("dotenv").config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB . . .")
  })
  .catch((e) => {
    console.error("Connection error", e.message)
  })

const createPosts = async () => {
  let games = [
    {
      name: "Bumper Cars",
      code: "4A59KQ",
      points: 60,
    },
    {
      name: "Rollercoaster",
      code: "6QF37M",
      points: 100,
    },
    {
      name: "Big Wheel",
      code: "8H5TK9",
      points: 80,
    },
    {
      name: "Hunted Mansion",
      code: "3G49SK",
      points: 90,
    },
    {
      name: "Ring Toss",
      code: "6R8G21",
      points: 50,
    },
    {
      name: "Ballon Dart",
      code: "4QK61M",
      points: 50,
    },
    {
      name: "Bowling",
      code: "7TC41B",
      points: 70,
    },
  ]
  await Game.deleteMany({})
  console.log("Creating posts . . .")
  await Game.insertMany(games)
  console.log("games created!")

  mongoose.connection.close()
}

createPosts()
