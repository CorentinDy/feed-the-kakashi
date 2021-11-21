let express = require('express');
let router = express.Router();
let feeder = require('../utils/feeder');

router.post('/', function (req, res, next) {
    if (req.body.msg === "feed") {
        feeder.feed()
        res.send('Kakashi is fed');
    } else if (req.body.msg === "purge") {
        feeder.purge()
    }

});

module.exports = router;
