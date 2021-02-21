var express = require('express');
const router = express.Router();

const { getPlace } = require('../controllers/weatherController');

router.get('/weather', getPlace);

module.exports = router;
