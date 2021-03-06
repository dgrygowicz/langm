const data = require('../util/data');

exports.getAllHeroes = (req, res) => {
  const factions = data.getData('factions.json');
  factions.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  const heroes = data.getData('heroes.json');
  heroes.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  res.render('heroes', {
    factions,
    heroes,
    pageTitle: 'Langrisser Mobile - Heroes',
  });
};

exports.getHero = (req, res) => {
  const heroes = data.getData('heroes.json');
  const factions = data.getData('factions.json');
  const skills = data.getData('skills.json');
  const equipments = data.getData('equipments.json');
  const classes = data.getData('classes.json');
  const soldiers = data.getData('soldiers.json');
  const hero = heroes.find(hero => hero.name === req.params.name);
  if (hero) {
    return res.render('hero', {
      hero,
      factions,
      skills,
      equipments,
      classes,
      soldiers,
      pageTitle: 'Langrisser Mobile - ' + hero.name,
    });
  }
  res
    .status(404)
    .render('404', { pageTitle: 'Langrisser Mobile - Page Not Found' });
};
