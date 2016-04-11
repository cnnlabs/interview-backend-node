'use strict';

var transformService = require('./transform-service'),
    feedService = require('./feed-service');
/**
 * Processes the News Feed and Transforms the data to the new format
 * @callback  {any} success - is called with the transformed data 
 */
function _ProcessFeed(success) {
    feedService.loadFeed(function(feed) {
        transformService.transformFeed(feed, function(transformedFeed) {
            success(transformedFeed)
        })
    });
}

module.exports = _ProcessFeed;