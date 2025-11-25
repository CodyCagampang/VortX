const request = require('request');
const apiOptions = {
  server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://vortxdb.onrender.com';
}

const register = function(req, res){
  res.render('register', {
    title: 'Register for VortX',
    hideNavbar: true,
    pageHeader: {
      title: 'Join VortX',
      strapline: 'Create your basketball database account',  
    }
  });
};

const doRegister = function(req, res){
    const path = '/api/register';

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
      if(response.statusCode === 201) {
        return res.redirect('/login'); // ChatGPT used to redirect to the login page
      } else {
        return res.render('register', {
          title: 'Register for VortX',
          hideNavbar: true,
          error: body.message
        });
      }
    });
};

module.exports = {
  register,
  doRegister
};