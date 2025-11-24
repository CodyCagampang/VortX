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

module.exports = {
  login
};