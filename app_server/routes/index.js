const express = require('express');
const router = express.Router();

const ctrlOthers = require('../controllers/others');
const ctrlTeams = require('../controllers/teamsList');
const ctrlWestStats = require('../controllers/westTeamStats');
const ctrlEastStats = require('../controllers/eastTeamStats');
const ctrlRegister = require('../controllers/register');
const ctrlLogin = require('../controllers/login');

/* Display teams on front page */
router.get('/', ctrlTeams.teamsList);

/* Display Win/Loss record of Western Conference teams */
router.get('/stats/west', ctrlWestStats.westTeamStats);

/* Display Win/Loss record of Eastern Conference Teams */
router.get('/stats/east', ctrlEastStats.eastTeamStats);

/* Login/Register Page */
router.get('/login', ctrlLogin.login);
router.get('/register', ctrlRegister.register);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
