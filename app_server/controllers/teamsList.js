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
                { name: 'Joel Embiid', number: 21, position: 'C', height:`7'0"`, age: 30 },
                { name: 'Tyrese Maxey', number: 0, position: 'G', height: `6'2"`, age: 23},
                { name: 'Eric Gordon', number: 23, position: 'G',   height: `6'3"`,  age: 36 },
                { name: 'Jared McCain', number: 20, position: 'G',   height: `6'3"`,  age: 21 },
                { name: 'Dominick Barlow', number: 25, position: 'F',   height: `6'9"`,  age: 22 },
                { name: 'Adem Bona', number: 30, position: 'F/C', height: `6'10"`, age: 22 },
                { name: 'Malcolm Hill', number: 33,  position: 'F',   height: `6'6"`,  age: 29 },
                { name: 'Jabari Walker',number: 34, position: 'F',   height: `6'8"`,  age: 23 },
                { name: 'Justin Edwards',  number: 11,  position: 'G/F', height: `6'7"`,  age: 21 },
                { name: 'Johni Broome', number: 22, position: 'F/C', height: `6'10"`, age: 23 }
              ]
            }
        ]
    })
}

module.exports = { teamsList };