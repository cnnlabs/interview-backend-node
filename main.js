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
 *     'Top stories' container with the following properties for each article:
 *
 *         {
 *             'url': String,
 *             'headline': String,
 *             'imageUrl': String,
 *             'byLine': String
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
 *   'Top stories'.  This content changes all the time.  The placement of
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

var http = require('http'), Validator = require('jsonschema').Validator, v = new Validator(), schema = {
        url: 'string',
        headline: 'string',
        imageUrl: 'string',
        byLine: 'string'
    },
    options = {//options for http request
        host: 'www.cnn.com',
        path: '/data/ocs/section/index.html:homepage1-zone-1.json',
        method: 'GET'
    };

//retuired json object
function Articles(url, headline, imageUrl, byLine) {
    this.url = url;
    this.headline = headline;
    this.imageUrl = imageUrl;
    this.byLine = byLine;
}



http.request(options, function (res) {
    res.setEncoding('utf8');
    var body = '', articles = [];
    res.on('data', function (chunk) {
        body = body + chunk;
    });

    res.on('end', function () {
        let jsonData = JSON.parse(body);
        const zoneContentsCount = jsonData.zoneContents.length;

        for (var j = 0;j < zoneContentsCount; j++) {
            if (jsonData.zoneContents[j].title == 'Top stories') {//check if the zonecontent's is of type top stories
                let numberOfArticles = jsonData.zoneContents[j].containerContents.length, container = jsonData.zoneContents[j].containerContents;

                for (let i = 0; i < numberOfArticles; i++) {
                    let imageSrc;
                    if (container[i].cardContents.media.contentType == 'image') {//if images are absent, make url empty
                        imageSrc = container[i].cardContents.media.elementContents.cuts.full16x9.uri;
                    } else {
                        imageSrc = '';
                    }

                    articles.push(new Articles('www.cnn.com' + container[i].cardContents.url,
                        container[i].cardContents.headlinePlainText,
                        imageSrc,
                        container[i].cardContents.auxiliaryText)
                    );
                }
                console.log(JSON.stringify(articles)); //convert to strings
                unitTest(articles); //run test cases for json schema
            } else {
                //ignore if container not top stories
            }
        }
    });

    function unitTest(jsonObj) {
        console.log('-----Unit Test-----');
        for (let i = 0; i < jsonObj.length;i++) {//test the json structure for each article
            var errorMsg;
            if (v.validate(jsonObj[i], schema).errors == '') {//if no error, print 'none'
                errorMsg = 'none';
            } else {
                errorMsg = v.validate(jsonObj[i], schema).errors;
            }
            console.log('article ' + (i + 1) + ' errors: ' + errorMsg);
        }
    }
}).end();