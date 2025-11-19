const express = require('express');
const router = express.Router();

const ctrlTeams = require('../controllers/teams');
const ctrlUsers = require('../controllers/users');

// Teams
router 
  .route('/teams')
  .get(ctrlTeams.teamsList)
  .post(ctrlTeams.teamsCreate);

router
  .route('/teams/:teamid')
  .get(ctrlTeams.teamsReadOne)
  .put(ctrlTeams.teamsUpdateOne)
  .delete(ctrlTeams.teamsDeleteOne);

// Login + Register
router
  .route('/register')
  .post(ctrlUsers.register)

router
  .route('/login')
  .post(ctrlUsers.login)

  module.exports = router;

