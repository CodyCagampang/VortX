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

  if (!req.params.teamid) {
    return res
      .status(400)
      .json({ message: "no teamid found"});
  }
  Team
    .findById(req.params.teamid)
    .then(team => {
      if(!team) {
        return res
          .status(404)
          .json({message: "Team not found"});
      }
      res
       .status(200)
       .json(team);
    })
    .catch(err => {
      res
       .status(500)
       .json({message: "Error retrieving team", error: err});
    });
} 
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
