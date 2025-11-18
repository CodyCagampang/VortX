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