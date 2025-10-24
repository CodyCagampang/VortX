const westTeamStats = function (req, res) {
    res.render('westTeamStats', {
        title: 'NBA Team Standings',
        pageHeader: {
            title: 'NBA 2025 Stats',
            strapline: 'Western Team Standings'
        },

        stats: [
         { team: 'Oklahoma City Thunder', seeding: 1, wins: 68, losses: 14, winPct: '.829', conference: 'West' },
        { team: 'Houston Rockets', seeding: 2, wins: 52, losses: 30, winPct: '.634', conference: 'West' },
        { team: 'Los Angeles Lakers', seeding: 3, wins: 50, losses: 32, winPct: '.610', conference: 'West' },
        { team: 'Denver Nuggets',seeding: 4, wins: 50, losses: 32, winPct: '.610', conference: 'West' },
        { team: 'Los Angeles Clippers', seeding: 5, wins: 50, losses: 32, winPct: '.610', conference: 'West' },
        { team: 'Minnesota Timberwolves', seeding: 6, wins: 49, losses: 33, winPct: '.598', conference: 'West' },
        { team: 'Golden State Warriors', seeding: 7, wins: 48, losses: 34, winPct: '.585', conference: 'West' },
        { team: 'Memphis Grizzlies', seeding: 8, wins: 48, losses: 34, winPct: '.585', conference: 'West' },
        { team: 'Sacramento Kings', seeding: 9, wins: 40, losses: 42, winPct: '.488', conference: 'West' },
        { team: 'Phoenix Suns', seeding: 10, wins: 36, losses: 46, winPct: '.439', conference: 'West' },
        { team: 'Portland Trail Blazers', seeding: 11, wins: 36, losses: 46, winPct: '.439', conference: 'West' },
        { team: 'Dallas Mavericks', seeding: 12, wins: 39, losses: 43, winPct: '.476', conference: 'West' },
        { team: 'San Antonio Spurs', seeding: 13,  wins: 34, losses: 48, winPct: '.415', conference: 'West' },
        { team: 'Utah Jazz', seeding: 14, wins: 17, losses: 65, winPct: '.207', conference: 'West' }
    ]
    });
};

module.exports = { westTeamStats };