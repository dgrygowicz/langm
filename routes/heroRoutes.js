const express = require('express');

const { getAllHeroes, getHero } = require('../controllers/heroController');

const router = express.Router();

router.route('/').get(getAllHeroes);

router.route('/:name').get(getHero);

module.exports = router;
