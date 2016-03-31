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

var request = require('request')
    , validator = require('jsonschema')
    , v = new validator.Validator()
    , articleSchema =  {
        url: 'string',
        headline: 'string',
        imageUrl: 'string',
        byLine: 'string'
    }
    , url = 'http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json'
    , errorMsg = ''
    ;

function Article(url, headline, imageUrl, byLine) {
    this.url = url;
    this.headline = headline;
    this.imageUrl = imageUrl;
    this.byLine = byLine;
}

function validateArticles(articlesObj) {
    if (articlesObj && articlesObj.length) {
        for (let i = 0; i < articlesObj.length; i++) {
            errorMsg = v.validate(articlesObj[i], articleSchema).errors;
            if (errorMsg != '') {
                console.log(`Error in article ${i + 1} errors: ${errorMsg}`);
                return false;
            }
        }
    }
    return true;
}

request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        let data = JSON.parse(body)
            , articles = []
            ;
        if (data.zoneContents && data.zoneContents.length) {
            for (let i = 0; i < data.zoneContents.length; i++) {
                if (data.zoneContents[i].title == 'Top stories') {
                    let containerContents = data.zoneContents[i].containerContents;
                    for (let j = 0; j < data.zoneContents[i].containerContents.length; j++) {
                        let imageSrc = '';

                        if (containerContents[j].cardContents.media.contentType == 'image') {
                            imageSrc = containerContents[j].cardContents.media.elementContents.cuts.full16x9.uri;
                        }

                        articles.push(new Article(`http://www.cnn.com${containerContents[j].cardContents.url}`,
                            containerContents[j].cardContents.headlinePlainText,
                            imageSrc,
                            containerContents[j].cardContents.auxiliaryText)
                        );
                    }
                    if (validateArticles(articles)) {
                        console.log(JSON.stringify(articles));
                    }
                }
            }
        } else {
            console.log('No articles found.');
        }
    } else {
        console.log('Error in getting response ', error);
    }
});