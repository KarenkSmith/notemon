var User = require("../models/user");

module.exports = {
    new: newMon,
    create,
    edit
};

function newMon (req, res, next) {
   
    res.render('minemons/new');
   };

 
function create (req, res){
        req.user.mons.push(req.body);
       req.user.save(function (){
         res.redirect("/minemons");
         console.log(req.body)
       });
     }
    // res.render("minemons");
// };

function edit(req, res){

    res.render("minemons/edit");
}

// function delMon(req, res, next) {
//     Mon.findOne({'minemons._id': req.params.id}, function(err, student) {
//       student.facts.id(req.params.id).remove();
//       student.save(function(err) {
//         res.redirect('/students');
//       });
//     });
//   }