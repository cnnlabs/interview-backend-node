'use strict';

var request = require('request'),
    log = require('winston');

/**
 *
 @class ZoneProcessor
 */
function ZoneProcessor(zone) {

    this.process = function process() {

        log.info(`__________processing zone endpoint ${zone.endpoint}______________`);


        request(zone.endpoint, function (error, response, data) {
            if (!error && response.statusCode == 200) {
                try {
                    zone.data = data;
                    zone.parser(zone, function (articles) {

                        log.info(`parser completed ${zone.name} articles found ${articles.length}`);
                        if ( articles.length == 0) {
                            log.info('no articles found');
                        } else {
                            console.log(JSON.stringify(articles));
                        }

                    });
                } catch (err) {
                    log.info(`Error Processing endpoint ${zone.endpoint} ... ${err.name} ... ${err.message}`);
                }
            } else {
                log.info(`Error Processing endpoint ${zone.endpoint} ${response.statusCode} ... ${error} `);
            }
        }).on('error', function (err) {
            log.info(err);
        });


    };
}

module.exports = ZoneProcessor;
