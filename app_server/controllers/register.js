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

module.exports = {
  register
};