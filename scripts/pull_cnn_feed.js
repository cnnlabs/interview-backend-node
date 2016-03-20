'use strict';

/*
* Uses the http module to pull CNN feed pointed to by config.js
*
* Input: N/A
* Output: Exports a function that provides JSON object of CNN feed.
*/

let http = require('http'),

    // defines URL of CNN feed:
    SOURCE_FEED_URL = 'http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json';


module.exports = (next) => {
    http.get(SOURCE_FEED_URL, (res) => {
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
