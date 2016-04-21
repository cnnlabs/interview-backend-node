'use strict';

module.exports.transformTopStories = function (topStories) {
  var url = 'http://www.cnn.com',
      outputTopStories = [];

  topStories.forEach(function (topStory) {
    var output = {};
        output.url      = url + topStory.cardContents.url;
        output.headline = topStory.cardContents.headlinePlainText;
        output.imageUrl = topStory.cardContents.media.elementContens.imageUrl;
        output.byLine   = topStory.cardContents.auxiliaryText;
        outputTopStories.push(output);
  });
  console.log('Top Stories: ', outputTopStories);
  return outputTopStories;
};
