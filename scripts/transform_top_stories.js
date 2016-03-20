'use strict';

/*
* Transforms the CNN feed's top stories to the desired new feed's schema.
*
* Config: From `config.js`:
*
* - config.IMG_URL_PROTOCOL is the default URL protocol for the new imageUrl property.
*
* - config.IMG_DOMAIN is the default URL domain for the new imageUrl property.
*
* - config.IMG_SIZES is an array of known possible image sizes from highest to lowest quality.
*
* Input: JSON object of CNN feed's top stories.
* Output: Exports a function that provides the new feed.
*
* ### Assumptions:
*
* - headlinePlainText is the text needed for story headlines.
*
* ### Other information:
*
* - If media content type is not image (eg, gallery or video),
*   then set imageUrl to an empty string.
*/

let config = require('../config');

function genByLine(article) {
    return article.cardContents.auxiliaryText || ''; // String
}
function genHeadline(article) {
    return article.cardContents.headlinePlainText || ''; // String
}
function genImageUrl(article) {
    if (!article.cardContents.media) {
        return '';
    }
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
        return `${config.IMG_URL_PROTOCOL + config.IMG_DOMAIN + article.cardContents.url}`; // String
    }
}
function getHighestQualityCutUri(cuts) {
    let highestQualityCut = '';

    highestQualityCut = config.IMG_SIZES.find((size) => {
        return cuts[size] && cuts[size].uri;
    });
    if (!highestQualityCut) {
        return '';
    }

    return cuts[highestQualityCut].uri;
}
function transformArticle(article) {
    if (!article.cardContents) {
        throw new Error('Article\'s cardContents not found.');
    }

    return {
        url: genUrl(article), // String
        headline: genHeadline(article), // String
        imageUrl: genImageUrl(article), // String
        byLine: genByLine(article) // String
    };
}


module.exports = (topStories, next) => {
    let newFeed = topStories.reduce((newFeed, story) => {
        return newFeed.concat(transformArticle(story));
    }, []);

    next(newFeed);
};
