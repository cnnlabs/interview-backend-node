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

var http = require('http');

 function Articles(url, headline, imageUrl, byLine)
 {
 	this.url = url;
 	this.headline = headline;
 	this.imageUrl = imageUrl;
 	this.byLine = byLine;
 }

var options = {
  host: 'www.cnn.com',//'localhost',
  //port: 8000,
  path: '/data/ocs/section/index.html:homepage1-zone-1.json',
  method: 'GET'
};

http.request(options, function(res) {
  //console.log('STATUS: ' + res.statusCode);
  //console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  var count = 1;

  var body = '';
  var jsonData;
  var articles = [];

  res.on('data', function (chunk) {
    //console.log('BODY: ' + chunk);
    //console.log(res)
    body = body + chunk;  
  });

  res.on('end', function(){
        var jsonData = JSON.parse(body);
        var zoneContentsCount = jsonData.zoneContents.length;

        for(var j = 0;j < zoneContentsCount; j++)
        {

        	if(jsonData.zoneContents[j].title == "Top stories")
        	{
		        var numberOfArticles = jsonData.zoneContents[j].containerContents.length;
		        var container = jsonData.zoneContents[j].containerContents;

		        for(var i = 0; i < numberOfArticles; i++)
		        {
		        	articles.push(new Articles('www.cnn.com'+container[i].cardContents.url, 
		        							   container[i].cardContents.headlinePlainText, 
		        							   container[i].cardContents.media.elementContents.cuts.full16x9.uri, 
		        							   container[i].cardContents.auxiliaryText)
		        	);
		        }
		        //console.log(JSON.stringify(articles))
		        console.log((articles));
	    	}
	    	else;
    	}
  });



}).end();