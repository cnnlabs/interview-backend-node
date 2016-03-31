'use strict';
var request = require('request');

getStories();

function getStories() {
    var extractedTopStories,
        processedTopStories,
        requestUrl = 'http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json';
    request(requestUrl, requestCallback);
    function requestCallback(error, response, body) {
        var jsonBody;
        if (!error && response.statusCode === 200) {
            jsonBody = JSON.parse(body);
            // logStories((filterStories(jsonBody)));
            extractedTopStories = getTopStories(jsonBody);
            processedTopStories = processTopStories(extractedTopStories);
            logStories(processedTopStories);
        } else {
            throw new Error(error.stack);
        }
    }
}

function logStories(stories) {
    console.log(JSON.stringify(stories));
}

function processTopStories(topStories) {
    var urlStub = 'www.cnn.com',
        processedTopStoryObj = {
            'Top stories': []
        };
    topStories.forEach( function (currentStory) {
        var newStory = {};
        newStory.byLine = currentStory.cardContents.auxiliaryText;
        newStory.headline = currentStory.cardContents.headlinePlainText;
        newStory.imageUrl = getStoryImage(currentStory.cardContents.media);
        newStory.url = urlStub + currentStory.cardContents.url;
        processedTopStoryObj['Top stories'].push(newStory);
    });
    return processedTopStoryObj;
}

function getTopStories(storiesObj) {
    var stories = [];
    storiesObj.zoneContents.forEach( function (currentZoneContent) {
        if (currentZoneContent.type.toLowerCase() === 'container' && currentZoneContent.title.toLowerCase() === 'top stories') {
            stories = currentZoneContent.containerContents;
            return;
        }
    });
    return stories;
}

function getStoryImage(storyMedia) {
    // this function was written under the assumption that the
    // JPEG with the largest dimensions is the highest quality image
    var bestImgUri,
        largestSize = 0,
        cuts;
    if (storyMedia.contentType === 'image') {
        cuts = storyMedia.elementContents.cuts;
        Object.keys(cuts).forEach( function (currentSizeKey) {
            var currentSize = cuts[currentSizeKey].height * cuts[currentSizeKey].width;
            if (currentSize > largestSize) {
                largestSize = currentSize;
                bestImgUri = cuts[currentSizeKey].uri;
            }
        });
    }
    return bestImgUri ? bestImgUri : '';
}
