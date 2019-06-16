const todo = require('./todo.route')
const user = require('./user.route')
const router = require('express').Router() 

router.use('/user', user)
router.use('/todo', todo)

module.exports = router