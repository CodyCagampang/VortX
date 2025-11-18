/* GET home page */
const about = function(req, res) {
  res.render('about', {
    title: 'About VortX',
    pageHeader: {
      title: 'About VortX',
      strapline: 'Learn about the VortX basketball database'
    },
    content: `
      VortX is a basketball database created for fans and analysts.
      Here you can explore team rosters, stats, and player information.
      Built using Express, Pug, and Node.js for educational purposes.
    `
  });
};

module.exports = { about };
