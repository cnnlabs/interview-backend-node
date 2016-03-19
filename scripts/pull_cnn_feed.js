'use strict';

let http = require('http'),

    config = require('../config');


module.exports = function (next) {
    http.get(config.SOURCE_FEED_URL, function (res) {
        let body = '';

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            let cnnFeed = JSON.parse(body);
            next(cnnFeed);
        });
    }).on('error', function (e) {
        console.error('Error fetching data from CNN:', e);
    });
};
