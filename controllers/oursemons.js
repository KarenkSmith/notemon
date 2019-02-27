const User = require("../models/user");

module.exports = {
    index,
    newMon
}

function index(req, res){
    User.find({})
    .then (function(users){
        res.render("oursemons/index", {
            user: req.user,
            users,
            title: "oursemons"
        });
    })
}

function newMon(req, res){
    User.findById(req.params.iduser)
    .then (function (user){
        // let mon = user.mons.id(req.params.id);
        // res.render('minemons/show', {
        //     title: 'test',
        //     user: req.user,
        //     details: ''
        res.render("minemons/show", {
            user,
            monID: req.params.id,
            title: 'title'
        });
    });
    

}

