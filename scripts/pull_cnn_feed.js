'use strict';

let http = require('http'),

    config = require('../config');


module.exports = (next) => {
    http.get(config.SOURCE_FEED_URL, (res) => {
        let body = '';

        res.on('data', (chunk) => {
            body += chunk;
        });

        res.on('end', () => {
            let cnnFeed = JSON.parse(body);
            next(cnnFeed);
        });
    }).on('error', (e) => {
        throw new Error(e);
    });
};
