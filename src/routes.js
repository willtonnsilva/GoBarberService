const express = require('express')
const routes = express.Router()
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const userController = require('./app/controllers/UserController')

routes.get('/signup', userController.create)
routes.post('/signup', upload.single('avatar'), userController.post)
module.exports = routes
