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

/*Define local variables*/
var i, c, image, zoneContents, media, headline, contentLen, byline, config,
    request, baseSiteURL, containerContents, url, newJSON, chImg,
    noImgText, assetURL, imgType;

config = require('./config');
request = require('request');
baseSiteURL = config.baseSiteUrl;
containerContents = null;
url = config.apiBaseUrl;
newJSON = '{ \n' +
	'No Data Found' +
	'}\n';

function addURL(url, newJSON) {
    var sURL;
    if (url.substring(0, 1) == '/') {
        sURL = `${newJSON} \t\"url\": \"${baseSiteURL}${url} \", \n`;
    } else {
    //Just print the url
        sURL = `${newJSON} \t\"url\": \"${url} \", \n`;
    }
    return sURL;
}

function tagJSON(c, newJSON, contentLen) {
    var tagJSON;
    if ( c < contentLen - 1 ) {
        tagJSON = `${newJSON} },`;
    } else {
        tagJSON = `${newJSON} }\n`;
    }

    return tagJSON;
}

function getAsset(image, newJSON) {
    assetURL;
    noImgText = '\t\"imageUrl\": \"' + 'No image defined' + '\", \n';
    if (typeof(image) == 'undefined') {
        //If imageURL isnt present then don't include it in the JSON
        assetURL = newJSON + noImgText;
    } else {
        chImg = imgCheck(image.full16x9.uri);
        switch (chImg) {
            case 0:
                assetURL = `${newJSON}\t\"imageUrl\": \"${image.full16x9.uri}\", \n`;
                break;
            default:
                assetURL = newJSON + noImgText;
        }

    }
    return assetURL;
}

function getByLine(byline, newJSON) {
    var byText;
    if (typeof(byline) == 'undefined') {
    //If imageURL isnt present then don't include it in the JSON
        byText = `${newJSON}\t\"byLine\": \"No data found\" \n`;
    } else {
        byText = `${newJSON}\t\"byLine\": \"${byline}\", \n`;
    }
    return byText;
}

function imgCheck(imageUrl) {
    var types = ['jpg', 'png', 'gif', 'PNG', 'GIF', 'JPG'];
    imgType = imageUrl.substring(imageUrl.length - 3, imageUrl.length);
    if (types.some(function (value) {
		//console.log(string.indexOf(value));
        return imgType.indexOf(value) > -1;
    })) {
    //console.log('The string contains one of the content types.');
        return 0;
    }
}

/*Setup request and get response*/
request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        //console.log(body) // Print the json response

        //Now Parse the body
        //console.log(body.zoneContents);

        //Make into object
        zoneContents = body.zoneContents;

        //console.log(zoneContents.length);

        for (i = 0; i < zoneContents.length; i++) {

        //Find the title to the first Top stories
            if (zoneContents[i].title == 'Top stories') {
            //console.log("Top stories Zone"+i+" :");
            //console.log(zoneContents[i]);
            //Set Cardcontents to array of content
                containerContents = zoneContents[i].containerContents;
            }
        }

        /*If contents are returned, the iterate the array of data*/

        if (containerContents != null) {
            //console.log(containerContents);
            for ( c = 0; c < containerContents.length; c++) {
                media = containerContents[c].cardContents.media;
            //console.log(media);

                image = media.elementContents.cuts;
                url = containerContents[c].cardContents.url;
                headline = containerContents[c].cardContents.headlineText;
                contentLen = containerContents.length;
                byline = containerContents[c].cardContents.byline;

            //Begin the JSON
                newJSON = '{ \n';

            //Add the base URL if first character is a slash
                newJSON = addURL(url, newJSON);

            //Add headline
                newJSON = `${newJSON}\t\"headline\": \"${headline}\", \n`;

            //Add image
                newJSON = getAsset(image, newJSON);

            //Byline check for author
                newJSON = getByLine(byline, newJSON);

            //Add closing tag
                newJSON = tagJSON(c, newJSON, contentLen);

            //Write JSON to console
                console.log(newJSON);
            }
        } else {
            //No data found so send no data found
            newJSON = '{ \n' +
            'No Data Found' +
            '}\n';
            //Print final result to console
            console.log(newJSON);

        }
    } else {
    //Print the error message
        console.log(`HTTP Response Error: ${error.message}`);
    }
});


