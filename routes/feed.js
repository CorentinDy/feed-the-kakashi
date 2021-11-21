let express = require('express');
let router = express.Router();
let feeder = require('../utils/feeder');

router.post('/', function(req, res, next) {
    feeder();
    res.send('Kakashi is fed');
});

module.exports = router;
