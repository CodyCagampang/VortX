/* GET home page */
const about = function(req, res){
  res.render('generic-text', {
    title: 'About VortX',
    content: '\n\nVortX was created off a passion project pertaining to basketball and the beauty and community that comes along with it.\n\nVortX allows you to view team standings, team rosters and player information. Created in 2025, it aims to become a pillar to the basketball community\n\n With our growing community, VortX aims to become the one stop shop in basketball databases and with new features coming into the upcoming season, we expect bigger and better things to come. So stay tuned!'
  });
};

module.exports = {
  about
};