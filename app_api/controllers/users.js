const register = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};

const login = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};

module.exports = { register, login };