'use strict';

module.exports = function (articlesArr, callback) {

    const alteredArticlesArr = [];

    articlesArr.forEach(function (article) {

        var alteredArticle = {}, key;

        for (key in article) {
            if (article.hasOwnProperty(key)) {

                // TODO: move these into modules
                // url
                if (article[key]['url']) {
                    alteredArticle.url = `http://www.cnn.com${article[key]['url']}`;
                }

                // headline
                if (article[key]['headlinePlainText']) {
                    alteredArticle.headline = article[key]['headlinePlainText'];
                }

                // imageUrl
                if (article[key]['media']) {
                    if (article[key]['media'].elementContents) {
                        if (article[key]['media'].elementContents['imageUrl']) {
                            // NOTE: I did not see any different types of image quality data; only different image sizes.
                            alteredArticle.imageUrl = article[key]['media'].elementContents['imageUrl'];
                        } else if (article[key]['media'].elementContents['video']) {
                            alteredArticle.video = article[key]['media'].elementContents['video'];
                        } else if (article[key]['media'].elementContents['gallery']) {
                            alteredArticle.gallery = article[key]['media'].elementContents['gallery'];
                        }
                    }
                }

                // byLine
                if (typeof article[key]['auxiliaryText'] === 'string') {
                    if (article[key]['auxiliaryText'].length === 0) {
                        alteredArticle.byLine = 'By CNN Sponsored Author';
                    } else {
                        alteredArticle.byLine = article[key]['auxiliaryText'];
                    }
                }

            }
        }

        alteredArticlesArr.push(alteredArticle);
    });
    callback(alteredArticlesArr);
};