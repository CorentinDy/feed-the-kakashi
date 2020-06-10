let express = require('express');
let router = express.Router();
let feeder = require('../utils/feeder');
//const db = require('../utils/store');


/* GET users listing. */
router.post('/', function(req, res, next) {
    feeder();
    //db.store();
    res.send('Kakashi is fed');
});

module.exports = router;
