var config = require('./config'),
    http = require('http');
/**
 * Processes the response from the feed specified in the config.feedUrl 
 * and calls success when complete.
 * 
 * @callback success - Returns parsed JSON to the success method 
 */
function _loadFeed(success) {
    http.get(config.feedUrl, (res) => {

        var body = '';

        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var response = JSON.parse(body);
            success(body);
        });

    });
}

module.exports = {
    loadFeed: _loadFeed
};