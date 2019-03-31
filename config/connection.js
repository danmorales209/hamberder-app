var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.SERVER_USER,
    password: process.env.SERVER_SECRET,
    database: "burgers_db"
});

mysql.connect(connection, function (error) {
    if (error) {
        console.log("Error occurred: " + error.stack)
        return;
    };

    console.log(`Connected to database as ID ${connection.threadId}`);
});


module.exports = connection;