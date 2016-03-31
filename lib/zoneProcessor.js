'use strict';

var request = require('request'),
    log = require('winston');

/**
 * Maps the parser to the zone def.
 * Outputs new feed content to console.
 *
 @class ZoneProcessor
 */
function ZoneProcessor(zone) {

    this.process = function process(callback) {

        log.info(`__________processing zone endpoint ${zone.endpoint}______________`);


        request( zone.endpoint, function (error, response, data) {
            if (!error && response.statusCode == 200) {
                try {
                    zone.data = data;
                    zone.parser(zone, function (articles) {
                        log.info(`parser completed ${zone.name} articles found ${articles.length}`);
                        if ( articles.length == 0) {
                            callback(null, 'no articles found');
                        } else {
                            callback(null, JSON.stringify(articles));
                        }

                    });
                } catch (err) {
                    callback(`Error Processing endpoint ${zone.endpoint} ... ${err.name} ... ${err.message}`);
                }
            } else {
                callback(`Error Processing endpoint ${zone.endpoint} ... ${error} `);
            }
        }).on('error', function (err) {
            callback(err);
        });


    };
}

module.exports = ZoneProcessor;
