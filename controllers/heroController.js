const data = require('../util/data');
const Faction = require('../models/factionModel');
const Hero = require('../models/heroModel');
require('../models/factionModel');

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
  res.render('heroes', {
    factions,
    heroes,
    pageTitle: 'Langrisser Mobile - Heroes',
  });
};

exports.getHero = async (req, res) => {
  // const heroes = data.getData('heroes.json');
  // const factions = data.getData('factions.json');
  // const skills = data.getData('skills.json');
  // const equipments = data.getData('equipments.json');
  // const classes = data.getData('classes.json');
  // const soldiers = data.getData('soldiers.json');
  const hero = await Hero.findByName(req.params.name);
  if (hero) {
    return res.render('hero', {
      hero,
      // factions,
      // skills,
      // equipments,
      // classes,
      // soldiers,
      pageTitle: 'Langrisser Mobile - ' + hero.name,
    });
  }
  res
    .status(404)
    .render('404', { pageTitle: 'Langrisser Mobile - Page Not Found' });
};
