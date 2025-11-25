const request = require('request');

const apiOptions = {
  server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://vortxdb.onrender.com';
}

const _renderHomepage = function(req, res, responseBody) {
  res.render('teams-list', {
    title: 'VortX - The most reliable basketball database!',
    pageHeader: {
      title: 'VortX',
      strapline: 'The BEST Basketball Database'
    },
    teams: responseBody
  });
};

const teamsList = function(req, res) {
    const path = '/api/teams';
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json: {},   
    };

    request(requestOptions, (err, response, body) => {
        _renderHomepage(req, res, body);
    }
  );
};

module.exports = { teamsList };