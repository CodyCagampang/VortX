const teamsList = function(req, res) {
  res.status(200).json({
    "status": "success", 
    "message": "Teams data endpoint"
  });
};

const eastStats = function(req, res) {
  res.status(200).json({
    "status": "success", 
    "message": "East stats endpoint"
  });
};

const westStats = function(req, res) {
  res.status(200).json({
    "status": "success", 
    "message": "West stats endpoint"
  });
};

module.exports = {
  teamsList,
  eastStats,
  westStats
};