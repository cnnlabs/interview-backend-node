'use strict';

var transformTopStories = require('./transform-top-stories');

module.exports.getTopStories = function (feed) {
  var topStories = [];
  feed.zoneContents.forEach(function (zoneContent) {
      if (zoneContent.type === 'container' && zoneContent.title === 'Top stories') {
          topStories = zoneContent.containerContents;
          return;
      }
      transformTopStories.transformTopStories(topStories);
  });
};

