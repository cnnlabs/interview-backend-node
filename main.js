//'use strict';

/*
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
 * ### Task 2 (of 2)
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
 * Write a unit test to validate that the JSON output is valid and matches the
 * expected schema.
 */

var request = require('request');

/*
 * Main function
 */
function run() {

    getTopStories(function (topStories) {
        var stories = buildStories(topStories);
        console.log(JSON.parse(stories));
    });
}

/*
 * Fetches the top stories from the CNN source url.
 * Returns the array of top stories via callback
 */
function getTopStories(callback) {

	// HTTP request options
    var options = {
        url: 'http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json'
    };

	// Request CNN source url
    request(options, function (error, response, body) {

		// Handle response from request
        if (!error && response.statusCode === 200) {
            var json = JSON.parse(body),
                zoneContents = json['zoneContents'],
                i, topStories;

			// Loop through containers to find the one containing top stories
            for (i in zoneContents) {
                if (zoneContents[i]['title'] === 'Top stories') {

					// Return array of top stories via callback function
                    topStories = zoneContents[i]['containerContents'];
                    callback(topStories);
                }
            }
        } else {
            console.log('Error: ${error}!');
        }
    });
}

/*
 * Constructs new JSON string of top stories
 */
function buildStories(stories) {

    var topStories = [],
        i, story, url, headline, imageUrl, byLine, newStory;

    for (i in stories) {
        story = stories[i],
        url = 'http://www.cnn.com${story["cardContents"]["url"]}',
        headline = story['cardContents']['headlinePlainText'],
        imageUrl = getImageUrl(story),
        byLine = story['cardContents']['auxiliaryText'],

        newStory = {
            url: url,
            headline: headline,
            imageUrl: imageUrl,
            byLine: byLine
        };

        topStories.push(newStory);
    }

    return JSON.stringify(topStories);
}

/*
 * Retrieves the largest image available for a story
 */
function getImageUrl(story) {

    var cuts = story['cardContents']['media']['elementContents']['cuts'];

    if (cuts['full16x9']) {
        return cuts['full16x9']['uri'];
    } else if (cuts['large']) {
        return cuts['large']['uri'];
    } else if (cuts['medium']) {
        return cuts['medium']['uri'];
    } else if (cuts['small']) {
        return cuts['small']['uri'];
    } else if (cuts['xsmall']) {
        return cuts['xsmall']['uri'];
    } else if (cuts['mini']) {
        return cuts['mini']['uri'];
    } else {
        return story['cardContents']['media']['elementContents']['imageUrl'];
    }
}

run();
