'use strict';
var assert = require('chai').assert,
    feedprocessor = require('../feed-processor-service');

describe('Feed Processor Service Tests', function () {

    var currentFeed;
    before(function (done) {
        feedprocessor(function (newFeed) {
            currentFeed = newFeed;
            done();
        });
    });

    it('should be an array', function (done) {
        assert.isArray(currentFeed, 'feed should be an array');
        done();
    });

    it('should contain correct article format', function (done) {
        currentFeed.every(function (article) {
            assert.property(article, 'url', 'must contain url property');
            assert.property(article, 'headline', 'must contain headline property');
            assert.property(article, 'imageUrl', 'must contain imageUrl property');
            assert.property(article, 'byLine', 'must contain byLine property');
        });

        done();
    });

});