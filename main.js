'use strict';

/*
* This script pulls a CNN feed,
* from which the script extracts top stories,
* then transforms the stories into a new feed per business requirements below.
*
* Config: Done indirectly in dependent modules.
* Input: N/A.
* Output: Logs out transformed new feed and exports function which generates new feed.
*/

/*
* # Business Requirements
*
* ## Task 1 (of 2)
*
* Create a script starting in this file, but not limited to, that will pull
* data from a remote source JSON feed, transform it, then output a different
* JSON feed matching a specific schema.  This should execute when running
* `npm start` and should log output to the console.
*
*
* ### Source:
*
*     http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json
*
*
* ### Output:
*
*     A valid JSON string representing an array of articles from the
*     "Top stories" container with the following properties for each article:
*
*         {
*             "url": String,
*             "headline": String,
*             "imageUrl": String,
*             "byLine": String
*         }
*
*
* ### Other information and guidelines:
*
* - Use the node version specified by the engines property in package.json.
*
* - `url` should include the protocol and domain, which would be www.cnn.com.
*
* - Not all articles will have an image.  If an article has something like a
*   gallery or a video, use your best judgement.
*
* - The `imageUrl` should reference the highest quality image available.
*
* - The `byLine` should contain information about the author of the article,
*   which may not be available for every article.
*
* - The source feed will represent what is on the top of the www.cnn.com
*   homepage.  The content to map is in a _container_ with a _title_ of
*   "Top stories".  This content changes all the time.  The placement of
*   this container will change as well.
*
*
*
*
* ## Task 2 (of 2)
*
* Configure the project to execute ESLint on all JavaScript files in the
* project using the included .eslintrc configuration when `npm test` is run.
* DO NOT use Grunt or Gulp.  The test should pass.
*
*
*
*
* ## Extra Credit
*
* Write a unit test to validate that the JSON ouput is valid and matches the
* expected schema.
*/

// Extracts the top stories from the CNN feed:
let getTopStories = require('./scripts/get_top_stories'),
    // Uses the http module to pull CNN feed:
    pullCnnFeed = require('./scripts/pull_cnn_feed'),
    // Transforms the top stories to the desired new feed's schema:
    transformTopStories = require('./scripts/transform_top_stories');

function genNewFeed(next) {
    pullCnnFeed((cnnFeed) => {
        getTopStories(cnnFeed, (topStories) => {
            transformTopStories(topStories, (newFeed) => {
                next(JSON.stringify(newFeed));
            });
        });
    });
}


genNewFeed(console.log);

module.exports = genNewFeed;
