'use strict';

/*
 * ### Assumptions:
 *
 * - That the instruction's "Write a unit test" did not really mean a single text.
 */

let expect = require('chai').expect,

    main = require('../main');


describe('main.js\'s JSON output', function () {
    let out,
        outCache;

    before(function (done) {
        main(function (newFeed) {
            outCache = newFeed;
            done();
        });
    });

    beforeEach(function () {
        out = outCache;
    });

    it('is a valid JSON string', function () {
        expect(JSON.parse(out)).to.be.ok;
    });

    it('represents an array', function () {
        let outObj = JSON.parse(out);
        expect(Array.isArray(outObj));
    });

    it('represents an array of objects', function () {
        let outObj = JSON.parse(out);
        outObj.every(function (elt) {
            return elt.constructor === Object;
        });
    });

    describe('represents an array of article objects that', function () {
        it('have following, and only following, properties of type string', function () {
            let outObj = JSON.parse(out);
            outObj.every(function (article) {
                expect(Object.keys(article)).to.have.length(4);
                expect(article).to.have.property('url').that.is.a('string');
                expect(article).to.have.property('headline').that.is.a('string');
                expect(article).to.have.property('imageUrl').that.is.a('string');
                expect(article).to.have.property('byLine').that.is.a('string');
            });
        });
    });
});
