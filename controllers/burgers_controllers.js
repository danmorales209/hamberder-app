// Dependencies
var Burger = require("../models/burger");

// Export the express app
module.exports = function (app) {

    // Default path. Uses the ORM all to get the burger information form the DB
    // and render the home page using the handlebars template.
    app.get("/", function (req, res) {
            Burger.all(function (data) {
                var hbsObj = {
                    burger: data
                };

                res.render("index", hbsObj);
            });
        }),

        //  The PUT updates a single existing entry and updateds the boolean devoured to true;
        app.put("/api/devour/:id", function (req, res) {

            let id = req.params.id;

            Burger.update("devoured", `id = ${id}`, function (response) {
                console.log("Burger updated.");
                res.status(200).end();
            });
            
        }),
        
        // POST adds a new burger to the database using the ORM create method
        app.post("/api/add", function (req, res) {

            console.log("Adding burger");
            
            Burger.create(req.body.newBurger, function(response) {
                console.log("Burger added");
                res.status(200).end();
            });
        });
}