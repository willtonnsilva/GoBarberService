const express = require('express')
const routes = express.Router()
const userController = require('./app/controllers/UserController')

routes.get('/signup', userController.create)

module.exports = routes
