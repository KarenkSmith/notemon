var User = require("../models/user");

module.exports = {
    new: newMon,
    create,
    show,
    edit,
    index,
    getMon,
    delMon,
    update
};

function index(req, res, next) {
    // console.log(req.user.mons)
    res.render('minemons', {
        title: "notemon",
        user: req.user,
        name: req.query.name,

    });
}

function newMon(req, res, next) {
    // console.log(req.user)
    res.render("minemons/new", { user: req.user, title: "take notemon" });
};

function show(req, res) {
    // console.log('USER: ', req.user);
    
    res.render('minemons/show', {
        user: req.user,
        title: "minemon"
    })
};

function getMon(req, res, next) {
    var monID = req.params.id
    res.render('minemons/show', {
        user: req.user,
        monID,
        title: "minemon"
    })

};

function create(req, res) {
    User.findById(req.params.id, function (err, u) {
        u.mons.push(req.body);
        u.save(function (err) {
            res.redirect(`/minemons`);
        });
    });
}

function edit(req, res) {
    var monID = req.params.id
        res.render("minemons/edit", {
            user: req.user,
            monID,
            title: "editemon"
        });
}

function update(req, res){
    var monID = req.params.id
    // console.log(req.user.mons)

    req.user.mons.forEach(m => {
        if(m._id == monID){
            // console.log(m)
            m.title = req.body.title
            m.details = req.body.details

            req.user.save(function (err) {
            console.log(m)
            res.redirect(`/minemons`);
        });
        }
    })

}

function delMon(req, res, next) {

req.user.mons.id(req.params.id).remove();
req.user.save(function (err) {
    // console.log(m)
    res.redirect(`/minemons`);
});
    
}