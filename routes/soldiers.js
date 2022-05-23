const express = require('express');

const router = express.Router();

router.get('/soldiers', (req, res) => {
  res.render('soldiers', { pageTitle: 'Langrisser Mobile - Soldiers' });
});

module.exports = router;
