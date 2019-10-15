class SessionController {
  create (req, res) {
    return res.render('auth/signin')
  }

  login (req, res) {}
}

module.exports = new SessionController()
