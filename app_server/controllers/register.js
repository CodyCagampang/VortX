const passport = require('passport');
const User = require('../../app_api/models/users');

const register = function(req, res){
  res.render('register', {
    title: 'Register for VortX',
    hideNavbar: true,
    pageHeader: {
      title: 'Join VortX',
      strapline: 'Create your basketball database account'
    }
  });
};


const doRegister = function(req, res) {
  const user = new User({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });

  User.register(user, req.body.password, function(err, account) {
    if (err) {
      return res.render('register', {
        title: 'Register for VortX',
        hideNavbar: true,
        pageHeader: {
          title: 'Join VortX',
          strapline: 'Create your VortX account!'
        },
        error: err.message
      });
    }

    // Auto login after registration
    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
};

module.exports = {
  register,
  doRegister
};
