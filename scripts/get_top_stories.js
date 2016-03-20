'use strict';

/*
* Extracts the top stories from the CNN feed.
*
* Config: `config.js`:
*
* - points to CNN feed property that is an array containing the top stories container,
*
* - defines the .type value of the object containing the top stories,
*
* - defines the .title value of the object containing the top stories.
*
* Input: JSON object of CNN feed.
* Output: Exports a function that provides the container containing top stories.
*/

let config = require('../config');

function findTopStoriesContainer(cnnFeed) {
    return cnnFeed[config.CONTAINERS_LOCATION].find((content) => {
        return content.type === config.TOP_STORIES_TYPE &&
            content.title === config.TOP_STORIES_TITLE;
    });
}


module.exports = (cnnFeed,  next) => {
    let topStoriesContainer = findTopStoriesContainer(cnnFeed);

    next(topStoriesContainer[config.TOP_STORIES_KEY]);
};
