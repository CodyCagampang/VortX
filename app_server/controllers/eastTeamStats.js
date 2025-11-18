const eastTeamStats = function (req, res) {
    res.render('eastTeamStats', {
        title: 'Eastern Conference Standings',
        pageHeader: {
            title: 'Eastern Conference Standings',
            strapline: '2025 Season Statistics'
        },

        stats: [
        { team: 'Cleveland Cavaliers', standings: 1, wins: 64, losses: 18, winPct: '.780', conference: 'East' },
        { team: 'Boston Celtics', standings: 2, wins: 61, losses: 21, winPct: '.744', conference: 'East' },
        { team: 'New York Knicks', standings: 3, wins: 51, losses: 31, winPct: '.622', conference: 'East' },
        { team: 'Indiana Pacers', standings: 4, wins: 50, losses: 32, winPct: '.610', conference: 'East' },
        { team: 'Milwaukee Bucks',  standings: 5, wins: 48, losses: 34, winPct: '.585', conference: 'East' },
        { team: 'Detroit Pistons', standings: 6, wins: 44, losses: 38, winPct: '.537', conference: 'East' },
        { team: 'Orlando Magic', standings: 7, wins: 41, losses: 41, winPct: '.500', conference: 'East' },
        { team: 'Atlanta Hawks', standings: 8, wins: 40, losses: 42, winPct: '.488', conference: 'East' },
        { team: 'Miami Heat', standings: 9, wins: 37, losses: 45, winPct: '.451', conference: 'East' },
        { team: 'Chicago Bulls', standings: 10, wins: 39, losses: 43, winPct: '.476', conference: 'East' },
        { team: 'Toronto Raptors', standings: 11, wins: 30, losses: 52, winPct: '.366', conference: 'East' },
        { team: 'Brooklyn Nets', standings: 12, wins: 26, losses: 56, winPct: '.317', conference: 'East' },
        { team: 'Charlotte Hornets', standings: 13, wins: 19, losses: 63, winPct: '.232', conference: 'East' },
        { team: 'Washington Wizards', standings: 14, wins: 18, losses: 64, winPct: '.220', conference: 'East' },
        { team: 'Philadelphia 76ers',  standings: 15, wins: 24, losses: 58, winPct: '.293', conference: 'East' }
     ]
 });
};

module.exports = { eastTeamStats };