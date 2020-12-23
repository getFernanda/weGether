var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/dados-pessoais', function(req, res, next) {
  res.render('dados_pessoais');
});

module.exports = router;
