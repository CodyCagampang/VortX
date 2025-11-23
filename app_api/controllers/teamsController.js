const mongoose = require('mongoose');
const Team = mongoose.model('Team');



const teamsList = function (req, res) {
  res
    .status(200)
    .json({ "status": "success" });
};

const teamsCreate = function (req, res) {
  res
    .status(200)
    .json({ "status": "success" });
};

const teamsReadOne = function (req, res) {
  res
    .status(200)
    .json({ "status": "success" });
};

const teamsDeleteOne = function (req, res) {
  res
    .status(200)
    .json({ "status": "success" });
};

const teamsUpdateOne = function (req, res) {
  res
    .status(200)
    .json({ "status": "success" });
};

module.exports = {
  teamsList,
  teamsCreate,
  teamsReadOne,
  teamsUpdateOne,
  teamsDeleteOne
};
