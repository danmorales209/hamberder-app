var Burger = require("../models/burger");

module.exports = function (app) {
    app.get("/", function (req, res) {
        Burger.all(function(data) {
            var hbsObj = {
                burger: data
            };

            console.log(hbsObj);

            res.render("index", hbsObj);
        });
    }),

    app.get("/a", function(req,res) {

    })
}