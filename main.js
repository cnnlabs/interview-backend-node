'use strict';
var log = require('winston'),
    Schema = require('schema-definition'),
    zoneParser = require('./lib/zoneParser'),
    zoneProcessor = require('./lib/zoneProcessor'),
    zoneEmitter = new (require('./lib/zoneEmitter'))();

log.add(log.transports.File, {filename: 'zone.log'});


let parser = new zoneParser( zoneEmitter ),
    zonendx = 0,
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

function processZones(zones, callback) {
    if ( zonendx > zones.length - 1) {
        callback;
    } else {
        let zonedef = zones[zonendx],
            zoneproc = new zoneProcessor(zonedef);
        zoneproc.process( function (articles) {
            console.log(articles);
            zonendx++;
            processZones(zones, callback);
        });
    }
}

processZones(zones, function ( )  {
    log.info(`Zone Processing Completed...${zonendx}`);
});
