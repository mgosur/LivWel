var express = require('express');
var router = express.Router(); //mountable route handling

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.use('/cards', require('./cards'));
router.use('/users', require('./users'));

router.get('/', function(req, res) {
	res.sendFile('/index.html');
});

module.exports = router;