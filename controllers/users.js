const User = require('../models/user');

module.exports = {
  index,
  show
 
};

function index(req, res, next) {
      // res.render('users/index',  {
      //   title: "notemon",
      //   user: req.user,
      //   name: req.query.name,
    
      // });
      User.find({}, function(err, users) {
        if (err) next(err);
        res.json(users);
        
      })
  }

  function show (req, res){
    User.findById(req.params.id, function(err, u){
      res.render("users/show", {
        user: u
      });
    });
    
  }