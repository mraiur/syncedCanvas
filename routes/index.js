var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index', {  });
    res.end();
});

/* GET home page. */
router.get('/:id', function(req, res, next) {
    res.render('canvas', { title: 'Express' });
});

module.exports = router;
