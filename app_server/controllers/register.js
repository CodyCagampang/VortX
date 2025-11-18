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