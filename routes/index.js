let express = require('express');
let router = express.Router();
const db = require('../utils/store');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

module.exports = router;
