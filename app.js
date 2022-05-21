const express = require('express');

const path = require('path');

const userRoutes = require('./routes/user');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3000);
