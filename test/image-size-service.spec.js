'use strict';
var assert = require('chai').assert;

describe('Image Service Tests', function(done) {

    it('should find highest image resolution', function(done) {
        var imageService = require('../image-size-service');

        // Moch Array
        var images = {
            mini: {
                height: 124,
                width: 220,
                uri: 'toosmall'
            },
            xsmall: {
                height: 169,
                width: 300,
                uri: 'toosmall'
            },
            small: {
                height: 259,
                width: 460,
                uri: 'toosmall'
            },
            medium: {
                height: 438,
                width: 780,
                uri: 'toosmall'
            },
            large: {
                height: 619,
                width: 1100,
                uri: 'toosmall'
            },
            full16x9: {
                height: 900,
                width: 1600,
                uri: 'largest'
            },
            mini1x1: {
                height: 120,
                width: 120,
                uri: 'toosmall'
            }
        };

        var largestImage = imageService.findHighestQualityImage(images);
        assert.equal(largestImage.uri, 'largest', 'largest image was not selected');
        done();

    });
});