'use strict';

/*
 * ### Assumptions:
 *
 * - That the instruction's "Write a unit test" did not really mean a single text.
 */

let expect = require('chai').expect,

    main = require('../main');


describe('main.js\'s JSON output', () => {
    let out,
        outCache;

    before((done) => {
        main((newFeed) => {
            outCache = newFeed;
            done();
        });
    });

    beforeEach(() => {
        out = outCache;
    });

    it('is a valid JSON string', () => {
        expect(JSON.parse(out)).to.be.ok;
    });

    it('represents an array', () => {
        let outObj = JSON.parse(out);
        expect(Array.isArray(outObj));
    });

    it('represents an array of objects', () => {
        let outObj = JSON.parse(out);
        outObj.every((elt) => {
            return elt.constructor === Object;
        });
    });

    describe('represents an array of article objects that', () => {
        it('have following, and only following, properties of type string', () => {
            let outObj = JSON.parse(out);
            outObj.every((article) => {
                expect(Object.keys(article)).to.have.length(4);
                expect(article).to.have.property('url').that.is.a('string');
                expect(article).to.have.property('headline').that.is.a('string');
                expect(article).to.have.property('imageUrl').that.is.a('string');
                expect(article).to.have.property('byLine').that.is.a('string');
            });
        });
    });
});
