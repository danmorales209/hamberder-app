var orm = require("../config/orm");

module.exports = {
    all: function(callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },

    create: function (burgerName, callback) {
        orm.insertOne(burgerName, function(res) {
            callback(res)
        });
    },

    update: function (column, condition, callback) {
        orm.updateOne(column, condition, function (res) {
            callback(res);
        });
    }
};