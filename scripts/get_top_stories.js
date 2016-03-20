'use strict';

/*
* Extracts the top stories from the CNN feed.
*
* Config: From `config.js`:
*
* - config.CONTAINERS_LOCATION points to CNN feed property that is an array containing the top stories container.
*
* - config.TOP_STORIES_KEY defines the property in the top stories container that is an array of the actual top stories.
*
* - config.TOP_STORIES_TYPE defines the .type value of the object containing the top stories.
*
* - config.TOP_STORIES_TITLE defines the .title value of the object containing the top stories.
*
* Input: JSON object of CNN feed.
* Output: Exports a function that provides JSON object of the top stories.
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
