'use strict';

let expect = require('chai').expect,
    main = require('../main');


describe('JSON output', function () {
    let out;

    beforeEach(function (done) {
        main(function (newFeed) {
          out = newFeed;
          done();
        })
    });

    it('is a valid JSON string', function () {
      expect(JSON.parse(out)).to.be.ok;
    });

    //   // representing array of article objects
    //   // from the "Top stories" container
    //   // each article has following, and only following, properties,
    //   // each article property is typeof String
});
