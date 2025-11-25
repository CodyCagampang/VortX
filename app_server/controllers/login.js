const request = require('request');

const apiOptions = {
  server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://vortxdb.onrender.com';
}

const login = function(req, res){
  res.render('login', {
    title: 'Login to VortX',
    hideNavbar: true,
    pageHeader: {
      title: 'VortX Login',
      strapline: 'Access your basketball database',
    }
  });
};

const doLogin = function(req, res){
    const path = '/api/login';

    const requiredData = {
      username: req.body.username,
      password: req.body.password
    };

    const requestOptions = {
        url : apiOptions.server + path,
        method : 'POST',
        json: requiredData
    };

    request(requestOptions, function(err, response, body) {
      if(response.statusCode === 200) {
        return res.redirect('/');
      } else {
        return res.render('login', {
          title: 'Login for VortX',
          hideNavbar: true,
          error: body.message
        });
      }
    });
};
module.exports = {
  login,
  doLogin
};