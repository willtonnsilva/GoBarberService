module.exports = (req, res, next) => {
  console.log('Session middleware', req.session)
  console.log('User middleware ', req.session.user)
  if (req.session && req.session.user) return res.redirect('/app/dashboard')
  return next()
};
