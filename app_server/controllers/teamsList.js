const teamsList = function (req, res) {
    res.render('teams-list', {
        title: 'VortX - The most reliable basketball database!',
        pageHeader: {
            title: 'VortX',
            strapline: 'The BEST Basketball Database'
        },

        teams: [
              { 
                name: 'Philadelphia 76ers',
                players: [
                    { name: 'Joel Embiid', number: 21, position: 'C', height: `7'0"`, age: 30 },
                    { name: 'Tyrese Maxey', number: 0, position: 'G', height: `6'2"`, age: 23 },
                    { name: 'Eric Gordon', number: 23, position: 'G', height: `6'3"`, age: 36 },
                    { name: 'Jared McCain', number: 20, position: 'G', height: `6'3"`, age: 21 },
                    { name: 'Dominick Barlow', number: 25, position: 'F', height: `6'9"`, age: 22 },
                    { name: 'Adem Bona', number: 30, position: 'F/C', height: `6'10"`, age: 22 },
                    { name: 'Malcolm Hill', number: 33, position: 'F', height: `6'6"`, age: 29 },
                    { name: 'Jabari Walker', number: 34, position: 'F', height: `6'8"`, age: 23 },
                    { name: 'Justin Edwards', number: 11, position: 'G/F', height: `6'7"`, age: 21 },
                    { name: 'Johni Broome', number: 22, position: 'F/C', height: `6'10"`, age: 23 }
                ]
            },

            {
                name: 'Atlanta Hawks',
                players: [
                    { name: 'Trae Young', number: 11, position: 'G', height: `6'1"`, age: 25 },
                    { name: 'Dejounte Murray', number: 5, position: 'G', height: `6'5"`, age: 27 },
                    { name: 'Jalen Johnson', number: 1, position: 'F', height: `6'9"`, age: 22 },
                    { name: 'Onyeka Okongwu', number: 17, position: 'C/F', height: `6'9"`, age: 23 },
                    { name: 'Clint Capela', number: 15, position: 'C', height: `6'10"`, age: 29 },
                    { name: 'Bogdan Bogdanović', number: 13, position: 'G/F', height: `6'5"`, age: 31 },
                    { name: 'Zaccharie Risacher', number: 10, position: 'F', height: `6'9"`, age: 19 },
                    { name: 'Kobe Bufkin', number: 4, position: 'G', height: `6'5"`, age: 20 },
                    { name: 'A.J. Griffin', number: 14, position: 'F', height: `6'6"`, age: 20 },
                    { name: 'Bruno Fernando', number: 24, position: 'C', height: `6'10"`, age: 25 }
                ]
            },

            {
                name: 'Boston Celtics',
                players: [
                    { name: 'Jayson Tatum', number: 0, position: 'F', height: `6'8"`, age: 26 },
                    { name: 'Jaylen Brown', number: 7, position: 'G/F', height: `6'6"`, age: 27 },
                    { name: 'Kristaps Porziņģis', number: 6, position: 'C/F', height: `7'2"`, age: 28 },
                    { name: 'Jrue Holiday', number: 4, position: 'G', height: `6'4"`, age: 34 },
                    { name: 'Derrick White', number: 9, position: 'G', height: `6'4"`, age: 29 },
                    { name: 'Al Horford', number: 42, position: 'C/F', height: `6'9"`, age: 38 },
                    { name: 'Payton Pritchard', number: 11, position: 'G', height: `6'1"`, age: 26 },
                    { name: 'Sam Hauser', number: 30, position: 'F', height: `6'8"`, age: 26 },
                    { name: 'Xavier Tillman', number: 26, position: 'F/C', height: `6'8"`, age: 25 },
                    { name: 'Jordan Walsh', number: 27, position: 'F', height: `6'7"`, age: 20 }
                ]
            },

            {
                name: 'Brooklyn Nets',
                players: [
                    { name: 'Mikal Bridges', number: 1, position: 'G/F', height: `6'6"`, age: 27 },
                    { name: 'Cam Thomas', number: 24, position: 'G', height: `6'3"`, age: 22 },
                    { name: 'Ben Simmons', number: 10, position: 'G/F', height: `6'10"`, age: 27 },
                    { name: 'Cameron Johnson', number: 2, position: 'F', height: `6'8"`, age: 28 },
                    { name: 'Nic Claxton', number: 33, position: 'C', height: `6'11"`, age: 25 },
                    { name: 'Dennis Schröder', number: 17, position: 'G', height: `6'1"`, age: 30 },
                    { name: 'Dorian Finney-Smith', number: 28, position: 'F', height: `6'7"`, age: 31 },
                    { name: 'Jalen Wilson', number: 22, position: 'F', height: `6'8"`, age: 23 },
                    { name: 'Noah Clowney', number: 21, position: 'F/C', height: `6'10"`, age: 19 },
                    { name: 'Keita Bates-Diop', number: 13, position: 'F', height: `6'8"`, age: 28 }
                ]
            },

            {
                name: 'Charlotte Hornets',
                players: [
                    { name: 'LaMelo Ball', number: 1, position: 'G', height: `6'7"`, age: 22 },
                    { name: 'Brandon Miller', number: 24, position: 'F', height: `6'9"`, age: 21 },
                    { name: 'Miles Bridges', number: 0, position: 'F', height: `6'7"`, age: 26 },
                    { name: 'Grant Williams', number: 2, position: 'F', height: `6'6"`, age: 25 },
                    { name: 'Mark Williams', number: 5, position: 'C', height: `7'0"`, age: 22 },
                    { name: 'Cody Martin', number: 11, position: 'G/F', height: `6'6"`, age: 28 },
                    { name: 'Nick Richards', number: 4, position: 'C', height: `7'0"`, age: 26 },
                    { name: 'Seth Curry', number: 30, position: 'G', height: `6'2"`, age: 33 },
                    { name: 'Davis Bertans', number: 46, position: 'F', height: `6'10"`, age: 31 },
                    { name: 'Nathan Mensah', number: 31, position: 'C', height: `6'10"`, age: 25 }
                ]
            },

            {
                name: 'Chicago Bulls',
                players: [
                    { name: 'DeMar DeRozan', number: 11, position: 'G/F', height: `6'6"`, age: 34 },
                    { name: 'Zach LaVine', number: 8, position: 'G', height: `6'5"`, age: 29 },
                    { name: 'Nikola Vučević', number: 9, position: 'C', height: `6'10"`, age: 33 },
                    { name: 'Coby White', number: 0, position: 'G', height: `6'5"`, age: 24 },
                    { name: 'Ayo Dosunmu', number: 12, position: 'G', height: `6'5"`, age: 24 },
                    { name: 'Patrick Williams', number: 44, position: 'F', height: `6'7"`, age: 22 },
                    { name: 'Jevon Carter', number: 5, position: 'G', height: `6'1"`, age: 28 },
                    { name: 'Torrey Craig', number: 13, position: 'F', height: `6'7"`, age: 33 },
                    { name: 'Julian Phillips', number: 15, position: 'F', height: `6'8"`, age: 20 },
                    { name: 'Adama Sanogo', number: 21, position: 'C', height: `6'9"`, age: 22 }
                ]
            },

            {
                name: 'Cleveland Cavaliers',
                players: [
                    { name: 'Donovan Mitchell', number: 45, position: 'G', height: `6'3"`, age: 27 },
                    { name: 'Darius Garland', number: 10, position: 'G', height: `6'1"`, age: 24 },
                    { name: 'Evan Mobley', number: 4, position: 'C/F', height: `7'0"`, age: 23 },
                    { name: 'Jarrett Allen', number: 31, position: 'C', height: `6'9"`, age: 26 },
                    { name: 'Max Strus', number: 1, position: 'G/F', height: `6'5"`, age: 28 },
                    { name: 'Caris LeVert', number: 3, position: 'G/F', height: `6'6"`, age: 29 },
                    { name: 'Isaac Okoro', number: 35, position: 'F', height: `6'5"`, age: 23 },
                    { name: 'Georges Niang', number: 20, position: 'F', height: `6'7"`, age: 31 },
                    { name: 'Sam Merrill', number: 5, position: 'G', height: `6'4"`, age: 27 },
                    { name: 'Craig Porter Jr.', number: 9, position: 'G', height: `6'1"`, age: 24 }
                ]
            },

            {
                name: 'Detroit Pistons',
                players: [
                    { name: 'Cade Cunningham', number: 2, position: 'G', height: `6'6"`, age: 22 },
                    { name: 'Jaden Ivey', number: 23, position: 'G', height: `6'4"`, age: 22 },
                    { name: 'Ausar Thompson', number: 9, position: 'G/F', height: `6'7"`, age: 21 },
                    { name: 'Jalen Duren', number: 0, position: 'C', height: `6'10"`, age: 20 },
                    { name: 'Isaiah Stewart', number: 28, position: 'F/C', height: `6'8"`, age: 23 },
                    { name: 'Marcus Sasser', number: 25, position: 'G', height: `6'1"`, age: 23 },
                    { name: 'Ron Holland', number: 5, position: 'F', height: `6'8"`, age: 18 },
                    { name: 'Tobias Harris', number: 12, position: 'F', height: `6'8"`, age: 31 },
                    { name: 'Simone Fontecchio', number: 19, position: 'F', height: `6'7"`, age: 28 },
                    { name: 'Malachi Flynn', number: 3, position: 'G', height: `6'1"`, age: 25 }
                ]
            },

            {
                name: 'Indiana Pacers',
                players: [
                    { name: 'Tyrese Haliburton', number: 0, position: 'G', height: `6'5"`, age: 24 },
                    { name: 'Pascal Siakam', number: 43, position: 'F', height: `6'8"`, age: 30 },
                    { name: 'Myles Turner', number: 33, position: 'C', height: `6'11"`, age: 28 },
                    { name: 'Bennedict Mathurin', number: '00', position: 'G/F', height: `6'6"`, age: 21 },
                    { name: 'Andrew Nembhard', number: 2, position: 'G', height: `6'3"`, age: 24 },
                    { name: 'Aaron Nesmith', number: 23, position: 'F', height: `6'5"`, age: 24 },
                    { name: 'Jarace Walker', number: 5, position: 'F', height: `6'7"`, age: 20 },
                    { name: 'Obi Toppin', number: 1, position: 'F', height: `6'9"`, age: 26 },
                    { name: 'T.J. McConnell', number: 9, position: 'G', height: `6'1"`, age: 32 },
                    { name: 'Ben Sheppard', number: 15, position: 'G', height: `6'6"`, age: 22 }
                ]
            },

            {
                name: 'Miami Heat',
                players: [
                    { name: 'Jimmy Butler', number: 22, position: 'F', height: `6'7"`, age: 34 },
                    { name: 'Bam Adebayo', number: 13, position: 'C', height: `6'9"`, age: 26 },
                    { name: 'Tyler Herro', number: 14, position: 'G', height: `6'5"`, age: 24 },
                    { name: 'Terry Rozier', number: 2, position: 'G', height: `6'1"`, age: 30 },
                    { name: 'Jaime Jaquez Jr.', number: 11, position: 'F', height: `6'6"`, age: 23 },
                    { name: 'Duncan Robinson', number: 55, position: 'F', height: `6'7"`, age: 30 },
                    { name: 'Nikola Jović', number: 5, position: 'F', height: `6'10"`, age: 21 },
                    { name: 'Josh Richardson', number: 0, position: 'G', height: `6'5"`, age: 30 },
                    { name: 'Kevin Love', number: 42, position: 'F/C', height: `6'8"`, age: 35 },
                    { name: 'Thomas Bryant', number: 31, position: 'C', height: `6'10"`, age: 26 }
                ]
            },
            
            {
                name: 'Milwaukee Bucks',
                players: [
                    { name: 'Giannis Antetokounmpo', number: 34, position: 'F', height: `6'11"`, age: 29 },
                    { name: 'Damian Lillard', number: 0, position: 'G', height: `6'2"`, age: 33 },
                    { name: 'Khris Middleton', number: 22, position: 'F', height: `6'7"`, age: 32 },
                    { name: 'Brook Lopez', number: 11, position: 'C', height: `7'0"`, age: 36 },
                    { name: 'Bobby Portis', number: 9, position: 'F/C', height: `6'10"`, age: 29 },
                    { name: 'Malik Beasley', number: 5, position: 'G', height: `6'4"`, age: 27 },
                    { name: 'Pat Connaughton', number: 24, position: 'G/F', height: `6'5"`, age: 31 },
                    { name: 'Andre Jackson Jr.', number: 44, position: 'G', height: `6'6"`, age: 22 },
                    { name: 'AJ Green', number: 20, position: 'G', height: `6'4"`, age: 25 },
                    { name: 'Thanasis Antetokounmpo', number: 43, position: 'F', height: `6'6"`, age: 31 }
                ]
            },

            {
                name: 'New York Knicks',
                players: [
                    { name: 'Jalen Brunson', number: 11, position: 'G', height: `6'2"`, age: 27 },
                    { name: 'Julius Randle', number: 30, position: 'F', height: `6'8"`, age: 29 },
                    { name: 'OG Anunoby', number: 8, position: 'F', height: `6'7"`, age: 26 },
                    { name: 'Donte DiVincenzo', number: 0, position: 'G', height: `6'4"`, age: 27 },
                    { name: 'Josh Hart', number: 3, position: 'G/F', height: `6'4"`, age: 29 },
                    { name: 'Mitchell Robinson', number: 23, position: 'C', height: `7'0"`, age: 26 },
                    { name: 'Isaiah Hartenstein', number: 55, position: 'C', height: `7'0"`, age: 26 },
                    { name: 'Miles McBride', number: 2, position: 'G', height: `6'2"`, age: 23 },
                    { name: 'Precious Achiuwa', number: 5, position: 'F/C', height: `6'8"`, age: 24 },
                    { name: 'Jericho Sims', number: 45, position: 'C', height: `6'10"`, age: 25 }
                ]
            },

            {
                name: 'Orlando Magic',
                players: [
                    { name: 'Paolo Banchero', number: 5, position: 'F', height: `6'10"`, age: 21 },
                    { name: 'Franz Wagner', number: 22, position: 'F', height: `6'10"`, age: 22 },
                    { name: 'Jalen Suggs', number: 4, position: 'G', height: `6'5"`, age: 23 },
                    { name: 'Wendell Carter Jr.', number: 34, position: 'C', height: `6'10"`, age: 25 },
                    { name: 'Markelle Fultz', number: 20, position: 'G', height: `6'3"`, age: 25 },
                    { name: 'Cole Anthony', number: 50, position: 'G', height: `6'3"`, age: 24 },
                    { name: 'Jonathan Isaac', number: 1, position: 'F', height: `6'10"`, age: 26 },
                    { name: 'Moritz Wagner', number: 21, position: 'C', height: `6'11"`, age: 27 },
                    { name: 'Anthony Black', number: 0, position: 'G', height: `6'7"`, age: 20 },
                    { name: 'Joe Ingles', number: 7, position: 'F', height: `6'8"`, age: 36 }
                ]
            },

            {
                name: 'Toronto Raptors',
                players: [
                    { name: 'Scottie Barnes', number: 4, position: 'F', height: `6'7"`, age: 22 },
                    { name: 'RJ Barrett', number: 9, position: 'G/F', height: `6'6"`, age: 24 },
                    { name: 'Immanuel Quickley', number: 5, position: 'G', height: `6'3"`, age: 25 },
                    { name: 'Jakob Poeltl', number: 19, position: 'C', height: `7'1"`, age: 28 },
                    { name: 'Gary Trent Jr.', number: 33, position: 'G', height: `6'5"`, age: 25 },
                    { name: 'Bruce Brown', number: 11, position: 'G/F', height: `6'4"`, age: 27 },
                    { name: 'Gradey Dick', number: 1, position: 'G', height: `6'6"`, age: 20 },
                    { name: 'Kelly Olynyk', number: 41, position: 'C/F', height: `6'11"`, age: 33 },
                    { name: 'Chris Boucher', number: 25, position: 'F/C', height: `6'9"`, age: 31 },
                    { name: 'Jalen McDaniels', number: 2, position: 'F', height: `6'9"`, age: 26 }
                ]
            },

            {
                name: 'Washington Wizards',
                players: [
                    { name: 'Kyle Kuzma', number: 33, position: 'F', height: `6'9"`, age: 28 },
                    { name: 'Jordan Poole', number: 13, position: 'G', height: `6'4"`, age: 25 },
                    { name: 'Bilal Coulibaly', number: 0, position: 'G/F', height: `6'6"`, age: 19 },
                    { name: 'Tyus Jones', number: 5, position: 'G', height: `6'2"`, age: 27 },
                    { name: 'Deni Avdija', number: 8, position: 'F', height: `6'9"`, age: 23 },
                    { name: 'Marvin Bagley III', number: 35, position: 'F/C', height: `6'10"`, age: 25 },
                    { name: 'Corey Kispert', number: 24, position: 'G/F', height: `6'6"`, age: 25 },
                    { name: 'Richaun Holmes', number: 22, position: 'C', height: `6'10"`, age: 30 },
                    { name: 'Landry Shamet', number: 14, position: 'G', height: `6'4"`, age: 27 },
                    { name: 'Johnny Davis', number: 1, position: 'G', height: `6'4"`, age: 22 }
                    
                ]
            }
        ]
    });
};

module.exports = { teamsList };