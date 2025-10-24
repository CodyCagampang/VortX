const express = require('express');
const router = express.Router();

const ctrlOthers = require('../controllers/others');
const ctrlTeams = require('../controllers/teamsList');
const ctrlWestStats = require('../controllers/westTeamStats');
const ctrlEastStats = require('../controllers/eastTeamStats');
const ctrlAuthentication = require('../controllers/authentication');
/* Display teams on front page */
router.get('/', ctrlTeams.teamsList);

/* Display Win/Loss record of Western Conference teams */
router.get('/stats/west', ctrlWestStats.westTeamStats);

/* Display Win/Loss record of Eastern Conference Teams */
router.get('/stats/east', ctrlEastStats.eastTeamStats);

/* Display Register Page */
router.get('/register', ctrlAuthentication.register);

/* Display Login Page */
router.get('/login', ctrlAuthentication.login);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
