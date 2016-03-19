'use strict';

// TODO doc
const DOMAIN = 'www.cnn.com',
    URL_PROTOCOL = 'http://';

function genByLine(article) {
    return article.cardContents.auxiliaryText || ''; // String
}
function genHeadline(article) {
  // TODO investigate:
  //   // headline = cardContents.headlinePlainText // headlineText diff how ?
    return article.cardContents.headlinePlainText || ''; // String
}
function genImageUrl(article) {
    if (!article.cardContents.media) {
        return '';
    }
    // TODO ? change what happens if non-image (eg, gallery, video)
    if (article.cardContents.media.contentType !== 'image') {
        return '';
    }
    return getHighestQualityCutUri(article.cardContents.media.elementContents.cuts); // String
}
function genUrl(article) {
  // ALT (safer?): Check if article.cardContents.url is already a full URL
    if (article.contentType === 'hyperlink') {
        return article.cardContents.url; // String
    } else {
        return `${URL_PROTOCOL + DOMAIN + article.cardContents.url}`; // String
    }
}
function getHighestQualityCutUri(cuts) {
    // NOTE: mini1x1 is a special cut that is not always in the same aspect ratio
    let sizes = ['full16x9', 'large', 'medium', 'small', 'xsmall', 'mini', 'mini1x1'],
        highestQualityCut = '';

    highestQualityCut = sizes.find(function (size) {
        return cuts[size] && cuts[size].uri;
    });
    if (!highestQualityCut) {
        return '';
    }

    return cuts[highestQualityCut].uri;
}
function transformArticle(article) {
    // TODO ? throw error if article.cardContents not found
    if (!article.cardContents) {
        return 'Article\'s cardContents not found.';
    }

    return {
        url: genUrl(article), // String
        headline: genHeadline(article), // String
        imageUrl: genImageUrl(article), // String
        byLine: genByLine(article) // String
    };
}


module.exports = function (topStoriesContainer) {
    return topStoriesContainer.containerContents.reduce(function (newFeed, story) {
        return newFeed.concat(transformArticle(story));
    }, []);
};
