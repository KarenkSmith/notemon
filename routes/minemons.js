var express = require('express');
var router = express.Router();
var mineCtrl = require('../controllers/minemons');

router.get("/new", mineCtrl.new);

router.post("/", mineCtrl.create);

router.get("/minemons/edit/:id", mineCtrl.edit);
// router.get('/', moviesCtrl.index);
// router.get('/new', moviesCtrl.new);
// router.get('/:id', moviesCtrl.show);
// router.post('/', moviesCtrl.create);

module.exports = router;