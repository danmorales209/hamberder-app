// Dependencies
var mysql = require('mysql');
require('dotenv').config(); // use to hide local "secret DB info"

//declare here, assign based upon environment
var connection;

if (process.env.JAWSDB_URL) { // deployed to Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { // local machine
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: process.env.SERVER_USER,
        password: process.env.SERVER_SECRET,
        database: "burgers_db"
    });
}

// Start and display connection info
connection.connect(connection, function (error) {
    if (error) {
        console.log("Error occurred: " + error.stack)
        return;
    };

    console.log(`Connected to database as ID ${connection.threadId}`);
});

module.exports = connection;