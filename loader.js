'use strict';

const _ = require('lodash'),
    http = require('http'),
    Q = require('q'),
    options = {
        host: 'www.cnn.com',
        path: '/data/ocs/section/index.html:homepage1-zone-1.json',
        agent: false  // create a new agent just for this one request
    };

function getUrl(url) {
    return _.startsWith(url, '/') ? `http://www.cnn.com${url}` : url;
}

function findBiggestImage(cuts) {
    let maxSize = 0, bestImageUrl;
    _.forEach(cuts, (cut) => {
        let currentSize = cut.height * cut.width;
        if (currentSize > maxSize) {
            maxSize = currentSize;
            bestImageUrl = cut.uri;
        }
    });
    return bestImageUrl;
}

function loadArticles() {

    const deferred = Q.defer();
    http.get(options, (response) => {

        let str = '', imageUrl, container, output;

        response.on('data', (chunk) => {
            str += chunk;
        });

        response.on('end', () => {
            container = _.find(JSON.parse(str).zoneContents, ['title', 'Top stories']);
            output = container.containerContents.map( (cc) => {

                if (cc.cardContents.media && cc.cardContents.media.elementContents && cc.cardContents.media.elementContents.cuts) {
                    imageUrl = getUrl(findBiggestImage(cc.cardContents.media.elementContents.cuts));
                } else if (cc.cardContents.media.url) {
                    imageUrl = getUrl(cc.cardContents.media.url);
                }

                return {
                    url: getUrl(cc.cardContents.url),
                    headline: cc.cardContents.headlinePlainText,
                    imageUrl: imageUrl,
                    byLine: cc.cardContents.auxiliaryText
                };
            });

            deferred.resolve(output);
        });
    });

    return deferred.promise;
}

module.exports = {

    getArticles() {
        return loadArticles();
    }

};
