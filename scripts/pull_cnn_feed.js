'use strict';

/*
* Uses the http module to pull CNN feed pointed to by config.js
*
* Config: From `config.js`:
*
* - config.SOURCE_FEED_URL defines URL of CNN feed.
*
* Input: N/A
* Output: Exports a function that provides JSON object of CNN feed.
*/

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
