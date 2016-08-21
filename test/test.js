var main = require('../main'),
    test = require('unit.js');

main.getTopStories(function (topStories) {

    console.log('\nBeginning unit tests...\n');

    var i,
        storiesArr = JSON.parse(topStories),
        story;

    test.array(storiesArr);
    console.log('Top stories array is valid\n');

    for (i in storiesArr) {

        story = storiesArr[i];

        console.log(`Testing story #${i}`);

        test.object(story).hasProperty('url');
        test.object(story).hasProperty('headline');
        test.object(story).hasProperty('imageUrl');
        test.object(story).hasProperty('byLine');
        console.log('Story contains correct properties');

        test.string(story['url']);
        test.string(story['headline']);
        test.string(story['imageUrl']);
        test.string(story['byLine']);
        console.log('Properties are valid strings');

        console.log(`Story #${i} is valid\n`);
    }

    console.log('Completed unit tests');
});