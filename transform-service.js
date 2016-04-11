'use strict';

var imageService = require('./image-size-service'),
    config = require('./config'),
    _ = require('underscore');
 /*
 *         {
 *             "url": String,
 *             "headline": String,
 *             "imageUrl": String,
 *             "byLine": String
 *         }
 */
function _transformFeed(feed, success)
{
    var result = [];
    
    
    var topStoriesContainer = _.filter(feed.zoneContents, function(zoneContent)
    {        
        return zoneContent.title === "Top stories";
    })[0];
    
    var topStories = topStoriesContainer.containerContents;
    
    _.forEach(topStories,function(story) {
        
        var images = story.cardContents.media.elementContents.cuts;
        
        var article = {
            url: config.baseContentUrl + story.cardContents.url,
            headline: story.cardContents.headlinePlainText,
            imageUrl: imageService.findHighestQualityImage(images).uri,
            byLine: story.cardContents.auxiliaryText
        };
        
        result.push(article);
        
    }, this);
    
    success(result);
};


module.exports = {
  transformFeed: _transformFeed  
};