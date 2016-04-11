'use strict';

var imageService = require('./image-size-service'),
    config = require('./config'),
    _ = require('underscore');

/**
 * @param  {any} feed - parsed json object from feed service
 * @callback  {any} success
 * @returns {object} - Returns result of transformation
 */
function _transformFeed(feed, success) {
    var result = [],
        topStoriesContainer = _.filter(feed.zoneContents, function (zoneContent) {
            return zoneContent.title === 'Top stories';
        })[0],
        topStories = topStoriesContainer.containerContents;

    _.forEach(topStories, function (story) {

        var images = story.cardContents.media.elementContents.cuts,
            article = {
                url: config.baseContentUrl + story.cardContents.url,
                headline: story.cardContents.headlinePlainText,
                imageUrl: imageService.findHighestQualityImage(images).uri,
                byLine: story.cardContents.auxiliaryText
            };

        result.push(article);

    }, this);

    success(result);
}


module.exports = {
    transformFeed: _transformFeed
};