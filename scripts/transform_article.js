// TODO doc
var DOMAIN = 'www.cnn.com',
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
    if (cuts.full16x9 && cuts.full16x9.uri) {
        return cuts.full16x9.uri;
    } else if (cuts.large && cuts.large.uri) {
        return cuts.large.uri;
    } else if (cuts.medium && cuts.medium.uri) {
        return cuts.medium.uri;
    } else if (cuts.small && cuts.small.uri) {
        return cuts.small.uri;
    } else if (cuts.xsmall && cuts.xsmall.uri) {
        return cuts.xsmall.uri;
    } else if (cuts.mini && cuts.mini.uri) {
        return cuts.mini.uri;
    // NOTE: mini1x1 is a special cut that is not always in the same aspect ratio
    } else if (cuts.mini1x1 && cuts.mini1x1.uri) {
        return cuts.mini1x1.uri;
    } else {
        return '';
    }
}


module.exports = function (article) {
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
};
