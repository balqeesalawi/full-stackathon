const router = require("express").Router()
const controller = require("../controllers/gameController")

router.get("/", controller.GetGames)
router.get("/:gameId", controller.GetGameId)

module.exports = router
