const usersRegister = function(req, res) {
  res.status(200).json({
    "status": "success", 
    "message": "Registration endpoint"
  });
};

const usersLogin = function(req, res) {
  res.status(200).json({
    "status": "success", 
    "message": "Login endpoint"
  });
};

module.exports = {
  usersRegister,
  usersLogin
};