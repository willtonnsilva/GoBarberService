const { User } = require('../models')

class SessionController {
  create (req, res) {
    return res.render('auth/signin')
  }

  async login (req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) {
      console.log('usuario não encontrado')
      return res.redirect('/')
    }

    if (!(await user.comparePassword(password))) {
      console.log('senhas não são iguais')
      return res.redirect('/')
    }

    req.session.user = user
    return res.redirect('/app/dashboard')
  }
}

module.exports = new SessionController()
