module.exports = {
    // points to CNN feed property that is an array containing the top stories container:
    CONTAINERS_LOCATION: 'zoneContents',

    // the default URL domain for the new imageUrl property:
    IMG_DOMAIN: 'www.cnn.com',
    // An array of known possible image sizes from highest to lowest quality:
    // NOTE: mini1x1 is a special cut that is not always in the same aspect ratio
    IMG_SIZES: ['full16x9', 'large', 'medium', 'small', 'xsmall', 'mini', 'mini1x1'],
    // the default URL protocol for the new imageUrl property:
    IMG_URL_PROTOCOL: 'http://',

    // defines URL of CNN feed:
    SOURCE_FEED_URL: 'http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json',

    // defines the property in the top stories container that is an array of the actual top stories:
    TOP_STORIES_KEY: 'containerContents',
    // defines the .title value of the object containing the top stories:
    TOP_STORIES_TITLE: 'Top stories',
    // defines the .type value of the object containing the top stories:
    TOP_STORIES_TYPE: 'container'
};
