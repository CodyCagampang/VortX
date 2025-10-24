const register = function(req, res) {
    res.render('register', {
        title: 'Register an Account',
        pageHeader: {
            title: 'VortX Register',
            strapline: 'Join VortX Today!'
        }
    })
}


const login = function(req, res) {
    res.render('login', {
        title: 'Login - VortX Database',
        pageHeader: {
            title: 'VortX Login',
            strapline: 'Login to VortX'
        }
    });
};

module.exports = {
    login, register
};

