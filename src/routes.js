const express = require('express')
const routes = express.Router()
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)
const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

const userController = require('./app/controllers/UserController')
const sessionController = require('./app/controllers/SessionController')
routes.use('/app', authMiddleware)
routes.use((req, res, next) => {
  res.locals.flashSucess = req.flash('sucess')
  res.locals.flashError = req.flash('error')
  return next()
})

routes.get('/signup', guestMiddleware, userController.create)
routes.post('/signup', upload.single('avatar'), userController.post)
routes.get('/', guestMiddleware, sessionController.create)
routes.post('/', sessionController.login)
routes.get('/app/dashboard', (req, res) => {
  return res.render('dashboard')
})
routes.get('/app/logout', sessionController.destroy)

module.exports = routes
