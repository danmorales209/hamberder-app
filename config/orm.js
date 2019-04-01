// Get the connection information
var connection = require("./connection");

// Define the ORM
module.exports = {
    /**
     * Gets all information from the burgers table, and exposes the data to a callback
     * THe data returned is in the form of rows of SQL objects with key names the same
     * as the column names in the DB
     * @param {Function} callback 
     */
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
     /**
      * Creates a new row in the burgers table using burgerName. All other fields have defualt values.
      * The response from the SQL server is exposed through the callback paramater.
      * @param {String} burgerName 
      * @param {Function} callback 
      */
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

    /**
     * Accepts a string column which only functions using 'devoured' currently
     * condition should be a string which can be evaluated as a boolean condition using the
     * columns in the DB
     * 
     * The results of the query are exposed the callback 
     * @param {String} column 
     * @param {Boolean Expression} condition 
     * @param {Function} callback 
     */
    updateOne: function (column, condition, callback) {
        let queryString =
            `UPDATE burgers
            SET ?? = true
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