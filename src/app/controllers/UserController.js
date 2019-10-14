const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async post (req, res) {
    console.log(req.body)
    try {
      req.body.avatar = 'teste.jpg';
      await User.create(req.body)
      res.redirect('/')
    } catch (error) {
      console.log('erro ao criar usuario', error)
    }
  }
}
module.exports = new UserController()
