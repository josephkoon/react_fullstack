var express = require('express');
var router = express.Router();

//get home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get zone form page
router.get('/createzone', function(req,res,next){
	res.render('createzone',null)
})

module.exports = router;





