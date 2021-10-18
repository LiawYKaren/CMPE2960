var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AutoDOC' });
});
// router.post('/startCategories', function(req, res, next) {
//   res.render('index', { title: 'AutoDOC' });
// });
module.exports = router;
