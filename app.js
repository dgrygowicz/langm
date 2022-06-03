const express = require('express');

const soldierRouter = require('./routes/soldierRoutes');
const heroRouter = require('./routes/heroRoutes');

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/public`));

app.use('/soldiers', soldierRouter);
app.use('/heroes', heroRouter);

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
