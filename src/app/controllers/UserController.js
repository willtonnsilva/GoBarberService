const { Users } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async post (req, res) {
    console.log(req.body)
    req.body.avatar = 'teste.jpg';
    await Users.create(req.body)
    res.redirect('/')
  }
}
module.exports = new UserController()
