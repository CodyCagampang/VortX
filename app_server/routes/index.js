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
router
  .route('/register')
  .get(ctrlRegister.register)
  .post(ctrlRegister.doRegister);

router
  .route('/login')
  .get(ctrlLogin.login)
  .post(ctrlLogin.doLogin);

router.get('/logout', (req,res) => {
  req.logout(() => {
    res.redirect('/');
  });
});
/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
