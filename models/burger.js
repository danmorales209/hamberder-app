// Dependencies
var orm = require("../config/orm");

// Model to abstract some of the mysql queries.
// Fairly simple implementation in this case as 
//  1) Data base is simple
//  2) Only one field to updated after creating data

module.exports = {
    // abstracts the select all from the mysql query. The data is exposed through the callback
    all: function(callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },
    // Add a burger to the DB
    create: function (burgerName, callback) {
        orm.insertOne(burgerName, function(res) {
            callback(res)
        });
    },
    // Updated a burger from the db
    update: function (id, condition, callback) {
        orm.updateOne(id, condition, function (res) {
            callback(res);
        });
    }
};