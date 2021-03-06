const router = require('express').Router()
const controllers = require('../controllers')

router.post('/get-task', controllers.tasks.getTask)
router.post('/create-new', controllers.tasks.createTask)
router.post('/edit-task', controllers.tasks.editTask)
router.post('/my-tasks', controllers.tasks.getMyTasks)

module.exports = router