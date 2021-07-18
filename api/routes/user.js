const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')

router.get('/me', userController.me)

module.exports = router
