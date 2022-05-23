const path = require('path');

const express = require('express');

const soldiersRoutes = require('./routes/soldiers');
const heroesRoutes = require('./routes/heroes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', soldiersRoutes);
app.use('/', heroesRoutes);

app.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Langrisser Mobile - Home' });
});

app.use((req, res, next) => {
  res
    .status(404)
    .render('404', { pageTitle: 'Langrisser Mobile - Page Not Found' });
});

app.use((error, req, res, next) => {
  res
    .status(500)
    .render('500', { pageTitle: 'Langrisser Mobile - Server Error' });
});

app.listen(3000);
