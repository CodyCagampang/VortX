const mongoose = require('mongoose');
const User = mongoose.model('User');

const register = function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password required." });
  }

  User.findOne({ username: username }, (err, existingUser) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists." });
    }

    User.create(
      { username: username, password: password },
      (err, newUser) => {
        if (err) {
          return res.status(500).json(err);
        }
        return res
          .status(201)
          .json({ message: "User registered successfully." });
      }
    );
  });
};


const login = function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password required." });
  }

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (!user || user.password !== password) {
      return res
        .status(401)
        .json({ message: "Invalid username or password." });
    }

    return res
      .status(200)
      .json({ message: "Login successful." });
  });
};

module.exports = {
  register,
  login
};