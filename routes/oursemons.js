var express = require('express');
var router = express.Router();
var oursCtrl = require('../controllers/oursemons');

router.get("/", function (req, res, next) {
    res.render("oursemons", {user: req.user})
  })
// router.get('/', moviesCtrl.index);
// router.get('/new', moviesCtrl.new);
// router.get('/:id', moviesCtrl.show);
// router.post('/', moviesCtrl.create);

module.exports = router;