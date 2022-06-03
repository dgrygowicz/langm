const express = require('express');

const { getAllSoldiers } = require('../controllers/soldierController');

const router = express.Router();

router.route('/').get(getAllSoldiers);

module.exports = router;
