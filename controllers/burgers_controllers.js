var Burger = require("../models/burger");

module.exports = function (app) {
    app.get("/", function (req, res) {
            Burger.all(function (data) {
                var hbsObj = {
                    burger: data
                };

                console.log(hbsObj);

                res.render("index", hbsObj);
            });
        }),

        app.put("/api/devour/:id", function (req, res) {

            let id = req.params.id;

            console.log(id);

            Burger.update("devoured", `id = ${id}`, function (response) {
                console.log("PUT called");
                console.log(response);
                res.status(200).end();
            });
            
        }),
        
        app.post("/api/add", function (req, res) {

            console.log("Adding burger");
            
            Burger.create(req.body.newBurger, function(response) {
                console.log("Burger added");
                console.log(response);
                res.status(200).end();
            });
        });
}