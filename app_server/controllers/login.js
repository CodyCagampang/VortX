const passport = require('passport');

const login = function(req, res) {
  res.render('login', {
    title: 'Login to VortX',
    hideNavbar: true,
    pageHeader: {
      title: 'VortX Login',
      strapline: 'Access your basketball database',
    }
  });
};

const doLogin = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
});

module.exports = {
  login, 
  doLogin
};