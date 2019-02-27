var express = require('express');
var router = express.Router();
var mineCtrl = require('../controllers/minemons');

//to look at a specific note 
router.get('/', mineCtrl.index);
router.get('/new', mineCtrl.new);
router.get('/:id', mineCtrl.getMon);
router.post("/:id/new", mineCtrl.create); //seems like this is wonky
router.put("/:id/new", mineCtrl.update); //seems like this is wonky
router.delete("/:id", mineCtrl.delMon);

router.get("/:id/edit", mineCtrl.edit); // should this be the correct edit link

// router.post("/", mineCtrl.create);

// router.get("/minemons/edit/:id", mineCtrl.edit);
// router.get('/', moviesCtrl.index);
// router.get('/new', moviesCtrl.new);
// router.get('/:id', moviesCtrl.show);
// router.post('/', moviesCtrl.create);

module.exports = router;