const User = require('../models/user');

module.exports = {
  index,
 
};

function index(req, res, next) {
      res.render('users/index',  {
        title: "notemon",
        user: req.user,
        name: req.query.name,
    
      });
  }