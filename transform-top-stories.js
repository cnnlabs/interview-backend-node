function transformTopStories(topStories) {
  var url = 'http://www.cnn.com',
      topStoriesArr = [];
  topStories.forEach(function (topStory) {
    output.url      = url + topStory.cardContents.url;
    output.headline = topStory.cardContents.headlinePlainText;
    output.imageUrl = topStory.cardContents.media.elementContens.imageUrl;
    output.byLine   = topStory.cardContents.auxiliaryText;
  })
}
