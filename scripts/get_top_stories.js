'use strict';

const CONTAINERS_LOCATION = 'zoneContents',
    TOP_STORIES_KEY = 'containerContents',
    TOP_STORIES_TITLE = 'Top stories',
    TOP_STORIES_TYPE = 'container';

function findTopStoriesContainer(cnnFeed) {
    return cnnFeed[CONTAINERS_LOCATION].find(function (content) {
        return content.type === TOP_STORIES_TYPE && content.title === TOP_STORIES_TITLE;
    });
}


module.exports = function (cnnFeed, next) {
    let topStoriesContainer = findTopStoriesContainer(cnnFeed);

    return next(topStoriesContainer[TOP_STORIES_KEY]);
};
