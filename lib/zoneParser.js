'use strict';
var zoneutils = require('./zoneUtils');

/**
 * Parses the zone feed into the provided schema.
 * Validates schema and adds story content to list
 * Returns list of stores
 *
 * @param emitter
 * @constructor
 */
function ZoneParsers(emitter) {

    this.topstories = function  topstories(zone, callback) {
        var feedObj = JSON.parse(zone.data),
            contents = feedObj['zoneContents'],
            stories = [];

        for (let container in contents) {
            try {
                if (contents[container].title == zone.name) {
                    let containerContents = contents[container].containerContents;
                    for (let ndx in containerContents) {
                        let headline = containerContents[ndx].cardContents['headlinePlainText'],
                            imageUrl = zoneutils.resolveMedia(containerContents[ndx].cardContents['media']),
                            url = `www.cnn.com/${containerContents[ndx].cardContents['url']}`,
                            byline = containerContents[ndx].cardContents['auxiliaryText'],
                            story = {headline: headline, imageUrl: imageUrl, url: url, byLine: byline},
                            isvalid = zone.schema.validate(story);

                        if (Array.isArray(isvalid)) {
                            for (let ndx in isvalid) {
                                emitter.emitMessage('Error', `Top stories detected invalid property at ${isvalid[ndx].property} at Index ${ndx}`);
                            }
                        } else {
                            stories.push(story);
                        }
                    }
                    break;
                }
            } catch (err) {
                throw {name: 'ZoneParsers.topstories exception', message: err};
            }
        }

        callback(stories);
    };
}


module.exports = ZoneParsers;

