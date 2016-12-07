'use strict';

var http = require('http'), url = 'http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json';

http.get(url, function (res) {
    var body = '';

    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function () {
        var jsonObject = JSON.parse(body), res = mainFunction(jsonObject);
        console.log(JSON.stringify(res));
    });
}).on('error', function (e) {
    console.log('Got an error: ', e);
});

function mainFunction(data) {
    var topStories = new Array(),
        url = '',
        byLine = '',
        headLine = '',
        imageUrl = '',
        zoneContentsArray = data.zoneContents,
        i,
        j,
        currentZoneContent,
        containerContents,
        currentContainerContent,
        cardContents,
        currentJson;
    for (i = 0; i < zoneContentsArray.length; ++i) {

        currentZoneContent = zoneContentsArray[i],
        containerContents = currentZoneContent.containerContents;
        for (j = 0; j < containerContents.length; ++j) {
            currentContainerContent = containerContents[j],
            cardContents = currentContainerContent.cardContents;

            if (cardContents.url.substring(0, 4) != 'http') {
                url = 'www.cnn.com';
            }

            url += (cardContents.url);
            byLine = cardContents.auxiliaryText;
            headLine = cardContents.headlinePlainText;
            imageUrl = getImageUrl(cardContents.media.elementContents.cuts);

            currentJson = new resultJson(url, headLine, imageUrl, byLine);
            topStories.push(currentJson);
        }
    }
    return topStories;
}


function getImageUrl(data) {
    if (data.full16x9) {
        return data.full16x9.uri;
    } else if (data.large) {
        return data.large.uri;
    } else if (data.medium) {
        return data.medium.uri;
    } else if (data.small) {
        return data.small.uri;
    } else if (data.xsmall) {
        return data.xsmall.uri;
    } else if (data.xsmall) {
        return data.xsmall.uri;
    } else if (data.mini) {
        return data.mini.uri;
    }
}

function resultJson(url, theadline, imageUrl, byLine) {
    this.url = url;
    this.headline = theadline;
    this.imageUrl = imageUrl;
    this.byLine = byLine;
}
