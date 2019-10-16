const { User } = require('../models')

class SessionController {
  create (req, res) {
    return res.render('auth/signin')
  }

  async login (req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })

    if (!user) {
      req.flash('error', 'Usuário não cadastrado.')
      return res.redirect('/')
    }

    if (!(await user.comparePassword(password))) {
      req.flash('error', 'Senha incorreta.')
      return res.redirect('/')
    }

    req.session.user = user
    return res.redirect('/app/dashboard')
  }

  destroy (req, res) {
    if (req.session) {
      req.session.destroy(() => {
        res.clearCookie('root')
        return res.redirect('/')
      })
    }
  }
}

module.exports = new SessionController()
