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
      console.log('avatar', avatar)
      await User.create({ ...req.body, avatar })
      res.redirect('/')
    } catch (error) {
      console.log('erro ao criar usuario', error)
    }
  }
}
module.exports = new UserController()
