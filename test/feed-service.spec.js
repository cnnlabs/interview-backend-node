'use strict';
var assert = require('chai').assert;

describe('Feed Service Tests', function() {

    it('should return data from service', function(done) {
        var feedservice = require('../feed-service');
        feedservice.loadFeed(function(data) {
            if (data === null)
            {
                assert('No Data is Returned');
            }
            else{
                done();
            }
        });
    });
});