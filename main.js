'use strict';
var log = require('winston'),
    Schema = require('schema-definition'),
    zoneParser = require('./lib/zoneParser'),
    zoneProcessor = require('./lib/zoneProcessor'),
    zoneEmitter = new (require('./lib/zoneEmitter'))();

log.add(log.transports.File, {filename: 'zone.log'});


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
// eventually this will need to be done in
// synchronous nature or node will hit
// an upper memory limit

function start() {
    for (let zone in zones) {

        let zonedef = zones[zone],
            zoneproc = new zoneProcessor(zonedef);
        zoneproc.process();
    }

}


start();
