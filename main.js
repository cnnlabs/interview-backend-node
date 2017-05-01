'use strict';

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
 * ### Output 1:
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
 * ### Output 2:
 *
 *     Create a React web app that displays the array of articles from the "Top Stories"
 *     container with headlines, bylines, and images.
 *
 * ### Other information and guidelines:
 *
 * - Use the most current LTS node version.
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
 */

var http = require('http');

http.get('http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json', function (response) {
    var body = '';
    // Grab data and add to body
    response.on('data', function (d) {
        body += d;
    });

    // Once response has ended
    response.on('end', function () {
        var data = JSON.parse(body),
            zContents = data.zoneContents,
            topStories = [],
            z,
            c;

        // Go through each Zone Contents object
        for (z = 0; z < zContents.length; z++) {
            // Check for Top Stories
            if (zContents[z].title === 'Top stories') {
                // Go through all container contents
                for (c = 0; c < zContents[z].containerContents.length; c++) {
                    // Check and grab articles
                    if (zContents[z].containerContents[c].contentType === 'article' || zContents[z].containerContents[c].contentType === 'hyperlink' || zContents[z].containerContents[c].contentType === 'video') {
                        topStories.push(new Article(
                            zContents[z].containerContents[c].cardContents.url,
                            zContents[z].containerContents[c].cardContents.headlinePlainText,
                            zContents[z].containerContents[c].cardContents.media,
                            zContents[z].containerContents[c].cardContents.auxiliaryText
                        ));
                    }
                }
            }
        }

        console.log(topStories);
    });
}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
});

// Article Constructor will handle finding the appropriate data points
function Article(url, headline, media, byLine) {
    if (url.startsWith('/')) {
        this.url = `http://www.cnn.com${url}`;
    } else {
        this.url = url;
    }

    this.headline = headline;

    if (media.contentType === 'image') {
        var cuts = media.elementContents.cuts;

        // Assuming there is always an object for each size, prioritize by image size
        if (cuts.full16x9.uri !== '' && typeof cuts.full16x9.uri !== 'undefined') {
            this.imageUrl = cuts.full16x9.uri;
        } else if (cuts.large.uri !== '' && typeof cuts.large.uri !== 'undefined') {
            this.imageUrl = cuts.large.uri;
        } else if (cuts.medium.uri !== '' && typeof cuts.medium.uri !== 'undefined') {
            this.imageUrl = cuts.medium.uri;
        } else if (cuts.small.uri !== '' && typeof cuts.small.uri !== 'undefined') {
            this.imageUrl = cuts.small.uri;
        } else if (cuts.xsmall.uri !== '' && typeof cuts.xsmall.uri !== 'undefined') {
            this.imageUrl = cuts.xsmall.uri;
        } else if (cuts.mini.uri !== '' && typeof cuts.mini.uri !== 'undefined') {
            this.imageUrl = cuts.mini.uri;
        } else if (cuts.mini1x1.uri !== '' && typeof cuts.mini1x1.uri !== 'undefined') {
            this.imageUrl = cuts.mini1x1.uri;
        } else {
            this.imageUrl = 'http://placehold.it/1600x900';
        }
    } else {
        this.imageUrl = 'http://placehold.it/1600x900';
    }

    this.byLine = byLine;
}

 /*
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
 *
 * ##  Extra Extra Credit
 *
 * Do something unique to wow us.  You have 24 hours to complete these taks - so
 * show us what else you can do.  :)
 */
