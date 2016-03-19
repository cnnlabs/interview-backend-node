'use strict';

let http = require('http');


const SOURCE_FEED_URL = 'http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json';


module.exports = function (next) {
    http.get(SOURCE_FEED_URL, function (res) {
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
