'use strict';
var log = require('winston'),
    Schema = require('schema-definition'),
    zoneParser = require('./lib/zoneParser'),
    zoneProcessor = require('./lib/zoneProcessor'),
    zoneEmitter = new (require('./lib/zoneEmitter'))();

log.add(log.transports.File, {filename: 'zone.log'});
/**
 *
 * Basic Operation:
 *  define zones - this is hardcoded into main. In the real world these could be stored in a separate file or loaded
 *                  from a mongo collection for example.
 *
 *                  name - name of the zone
 *                  endpoint - location of the content we need to parse
 *                  parser - the zoneParser method used by the zoneProcessor
 *                  schema - a schema object to validate against
 *
 *  for each zone definition
 *      create a zoneProcessor and process the zone
 *
 *  when the zoneProcessor is complete it will handle outputing the new feed
 *   if zoneProcessor encounters and error uses the errorEmitter to emit an error message
 *
 *
 *
 */
let parser = new zoneParser( zoneEmitter ),
    zones = [
        {
            name: 'Top stories',
            endpoint: 'http://cnn.com/data/ocs/section/index.html:homepage1-zone-1.json',
            parser: parser.topstories,
            schema: new Schema({
                url: String,
                headline: String,
                imageUrl: String,
                byLine: String
            })
        }
    ];

zoneEmitter.on('Error', function (message) {
    log.info(`zone parsing Error ${message}`);
});

function start() {
    for (let zone in zones) {

        let zonedef = zones[zone],
            zoneproc = new zoneProcessor(zonedef);
        zoneproc.process();
    }

}


start();