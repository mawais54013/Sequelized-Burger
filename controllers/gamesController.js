var express = require("express");
// get these requirements 
var router = express.Router();
var model = require("../models");
var connection = require('../config/connection.js');
// get all from the database and then show them on the DOM 
model.burger.sync();

// router.get("/", function(req, res) {
//  res.redirect("/burgers");
// });

router.get('/', function (req, res) {
  model.burger.findAll({}).then(function(data) {
    res.render("index", {burgers : data});
  });
});

// this inserts a new entry with three different values 
router.post("/", function(req, res) {
  var newBurger = req.body.game_name;
  console.log(newBurger + "============");
  model.burger.create({
    game_name: newBurger,
    bad: 0
  })
  .then(function () {
    res.redirect("/");
  });
});

// router.post("/burgers/updateOne/:id", function(req, res)
// {
//   model.burger.create({
//     game_name: req.body.game_name,
//     bad: true
//   }).then(function ()
//   {
//     res.redirect("/burgers");
//   })
// });
// this looks for the id of a game and later on changing the bad value of the game wheather it was good or bad 
router.put("/:id", function(req, res) {
  console.log("======================")
 var theId = req.params.id;

   model.burger.update({
    bad: 1
    },
    {
      where: {
        id: theId
      }
    }).then(function () {
      res.redirect("/");
    });
});

module.exports = router;
