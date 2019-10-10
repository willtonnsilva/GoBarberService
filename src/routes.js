const express = require('express')
const routes = express.Router()
const userController = require('./app/controllers/UserController')

routes.get('/signup', userController.create)
routes.post('/signup', userController.post)
module.exports = routes
