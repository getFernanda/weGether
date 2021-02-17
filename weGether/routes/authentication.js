const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/login', function(req, res, next) {
  if (req.query.fail)
        res.render('login', { message: 'Usuário e/ou senha incorretos!' });
    else
        res.render('login', { message: null });
});

/* POST login page */
router.post('/login',
    passport.authenticate('local', { 
        successRedirect: '/', 
        failureRedirect: '/login?fail=true' 
    })
);

module.exports = router;