var connection = require("./connection");
var mysql = require("mysql");

module.exports = {
    selectAll: function (callback) {
        let queryString = `SELECT * FROM burgers;`;
        connection.query(queryString, function (err, result) {
            if (err) {
                console.log("An error occurred: " + err.stack)
                return;
            }

            callback(result);
        });
    },

    insertOne: function (burgerName, callback) {
        let queryString =
            `INSERT INTO burgers
            (burger_name)
            VALUES
            ( ? );`;

        connection.query(queryString, [burgerName], function (err, result) {
            if (err) {
                console.log("An error occurred: " + err.stack);
                return;
            }

            callback(result);
        });
    },

    updatedOne: function (column, condition, callback) {
        let queryString =
            `UPDATE burgers
            SET ??
            WHERE ${condition};`;

        connection.query(queryString, [column], function (err, result) {
            if (err) {
                console.log("An error occurred: " + err.stack);
                return;
            }

            callback(result);
        });
    }
}