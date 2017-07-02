var config = require('./config'), //file that requires development or production env file
    mongoose = require('mongoose'),
    db = mongoose.connect(
        config.db.uri,
        config.db.options,
        function (err) {
            if (err) {
                console.log(err);
            }
        }
    );

module.exports = function () {
    return db;
};