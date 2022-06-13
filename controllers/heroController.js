const Faction = require('../models/factionModel');
const Hero = require('../models/heroModel');

exports.getAllHeroes = async (req, res) => {
  const factions = await Faction.find();
  factions.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  const heroes = await Hero.find()
    .populate('threePointSkill')
    .populate('exlEquipment')
    .populate('factions')
    .populate({ path: 'classes', populate: ['class', 'skills', 'soldiers'] })
    .populate({ path: 'maxStats', populate: { path: 'class', select: 'name' } })
    .populate('trainingGroundSoldiers');
  heroes.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  res.render('hero/index', {
    factions,
    heroes,
    pageTitle: 'Langrisser Mobile - Heroes',
  });
};

exports.getHero = async (req, res) => {
  const hero = await Hero.findByName(req.params.name);
  if (hero) {
    return res.render('hero/hero-detail', {
      hero,
      pageTitle: 'Langrisser Mobile - ' + hero.name,
    });
  }
  res
    .status(404)
    .render('404', { pageTitle: 'Langrisser Mobile - Page Not Found' });
};
