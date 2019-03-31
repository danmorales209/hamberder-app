/* PROJECT DEPENDENCIES */
var express = require('express');
var exhbs = require('express-handlebars');

/* Setup the express app */
var app = express();
var PORT = process.env.PORT || 8080;

// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup application to use Handlebars
app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set the public folder to server front-end data
app.use(express.static("./public"));

// Controller for the application
require("./controllers/burgers_controllers")(app);

app.listen(PORT, function (error) {
    if (error) throw error;

    console.clear();
    console.log(`Listening on Port ${PORT}`);
});

