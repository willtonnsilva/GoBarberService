const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async post (req, res) {
    console.log(req.body)
    console.log(req.file)
    try {
      const { filename: avatar } = req.file
      await User.create({ ...req.body, avatar })
      res.redirect('/')
    } catch (error) {
      req.flash('error', 'Erro ao criar usuário')
    }
  }
}
module.exports = new UserController()
