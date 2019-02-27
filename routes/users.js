var express = require('express');
var router = express.Router();
var userCtrl = require("../controllers/users");
var mineCtrl = require('../controllers/minemons');


/* GET users listing. */
router.get("/", userCtrl.index);
//minemons list of all mons 
router.get("/:id", userCtrl.show);



module.exports = router;
