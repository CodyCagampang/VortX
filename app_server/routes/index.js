const express = require('express');
const router = express.Router();


const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlTeams = require('../controllers/teamsList');
const ctrlWestStats = require('../controllers/westTeamStats')
/* Locations pages */
router.get('/', ctrlTeams.teamsList);
router.get('/stats/west', ctrlWestStats.westTeamStats);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
