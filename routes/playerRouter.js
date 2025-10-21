const router = require('express').Router()
const controller = require('../controllers/playerController')

router.get('/', controller.GetPlayers)
router.post('/', controller.CreatePlayer)
router.put('/:player_id', controller.UpdatePlayer)
router.delete('/:player_id', controller.DeletePlayer)

module.exports = router
