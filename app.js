const path = require('path');
const fs = require('fs');

const express = require('express');

// const userRoutes = require('./routes/user');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// app.use(userRoutes);

app.get('/heroes', (req, res) => {
  const factionFilePath = path.join(__dirname, 'data', 'factions.json');
  const factionFileData = fs.readFileSync(factionFilePath);
  const factions = JSON.parse(factionFileData);
  factions.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  const heroesFilePath = path.join(__dirname, 'data', 'heroes.json');
  const heroesFileData = fs.readFileSync(heroesFilePath);
  const heroes = JSON.parse(heroesFileData);

  heroes.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  res.render('heroes', {
    factions: factions,
    heroes: heroes,
    pageTitle: 'Langrisser Mobile - Heroes',
  });
});

app.get('/hero', (req, res) => {
  const heroesFilePath = path.join(__dirname, 'data', 'heroes.json');
  const heroesFileData = fs.readFileSync(heroesFilePath);
  const heroes = JSON.parse(heroesFileData);
  const factionsFilePath = path.join(__dirname, 'data', 'factions.json');
  const factionsFileData = fs.readFileSync(factionsFilePath);
  const factions = JSON.parse(factionsFileData);
  const skillsFilePath = path.join(__dirname, 'data', 'skills.json');
  const skillsFileData = fs.readFileSync(skillsFilePath);
  const skills = JSON.parse(skillsFileData);
  const equipmentsFilePath = path.join(__dirname, 'data', 'equipments.json');
  const equipmentsFileData = fs.readFileSync(equipmentsFilePath);
  const equipments = JSON.parse(equipmentsFileData);
  const classesFilePath = path.join(__dirname, 'data', 'classes.json');
  const classesFileData = fs.readFileSync(classesFilePath);
  const classes = JSON.parse(classesFileData);
  const soldiersFilePath = path.join(__dirname, 'data', 'soldiers.json');
  const soldiersFileData = fs.readFileSync(soldiersFilePath);
  const soldiers = JSON.parse(soldiersFileData);
  const hero = heroes.find(hero => hero.name === req.query.name);
  res.render('hero', {
    angelina: hero,
    factions: factions,
    skills: skills,
    equipments: equipments,
    classes: classes,
    soldiers: soldiers,
    pageTitle: 'Langrisser Mobile - ' + hero.name,
  });
});

app.get('/soldiers', (req, res) => {
  res.render('soldiers', { pageTitle: 'Langrisser Mobile - Soldiers' });
});

app.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Langrisser Mobile - Home' });
});

app.use((req, res, next) => {
  res
    .status(404)
    .render('404', { pageTitle: 'Langrisser Mobile - Page Not Found' });
});

app.listen(3000);
