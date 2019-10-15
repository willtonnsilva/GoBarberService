const express = require('express')
const routes = express.Router()
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const userController = require('./app/controllers/UserController')
const sessionController = require('./app/controllers/SessionController')

routes.get('/signup', userController.create)
routes.post('/signup', upload.single('avatar'), userController.post)
routes.get('/', sessionController.create)
routes.post('/', sessionController.login)
routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user)
  return res.render('dashboard')
})

module.exports = routes
