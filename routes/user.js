const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/heroes', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'heroes.html'));
});

router.get('/heroes/angelina', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'angelina.html'));
});

router.get('/soldiers', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'soldiers.html'));
});

router.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

module.exports = router;
