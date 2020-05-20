let express = require('express');
let router = express.Router();
const db = require('../utils/store');

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(db.read());
  res.render('pages/index', { title: 'Express', data: db.read() });
});

module.exports = router;
