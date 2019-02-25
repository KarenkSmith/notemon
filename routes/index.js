var express = require('express');
var router = express.Router();
var passport = require('passport');


router.get("/minemons", function(req, res, next){
  res.render("minemons", {})
})

router.get("/oursemons", function(req, res, next){
  res.render("oursemons", {})
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'notemon' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
