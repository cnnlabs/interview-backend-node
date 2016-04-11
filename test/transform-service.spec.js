'use strict';
var assert = require('chai').assert;

describe('Transform Service Tests', function(done) {

    it('should translate results to new format', function(done) {
        var transformService = require('../transform-service'),
            feedService = require('../feed-service');
            
        feedService.loadFeed(function(feed)
        {
           transformService.transformFeed(feed, function(transformedFeed)
           {
               console.log(transformedFeed);
               done();
           }) 
        });
    });
});