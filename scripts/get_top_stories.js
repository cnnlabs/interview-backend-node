'use strict';

let config = require('../config');

function findTopStoriesContainer(cnnFeed) {
    return cnnFeed[config.CONTAINERS_LOCATION].find(function (content) {
        return content.type === config.TOP_STORIES_TYPE &&
            content.title === config.TOP_STORIES_TITLE;
    });
}


module.exports = function (cnnFeed, next) {
    let topStoriesContainer = findTopStoriesContainer(cnnFeed);

    next(topStoriesContainer[config.TOP_STORIES_KEY]);
};
