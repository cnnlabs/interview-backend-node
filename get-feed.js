'use strict';

var request = require('request'),
    getTopStories = require('./get-top-stories');

module.exports.getFeed = function () {
  var feedUrl = 'http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json';
  request(feedUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var feed = JSON.parse(body);
      getTopStories.getTopStories(feed);
    } else {
      throw new Error();
    }
  });
};



