'use strict';

// this file will be excuded from eslint, however, it meets the linting standards
// get mocha; npm install mocha -g
// to run this test in your terminal; mocha ./specs/schema.output.spec.js

const expect = require('chai').expect;

describe('CNN Top Story Articles API', function () {
    it('should validate that the JSON ouput is valid and matches the expected schema', function (done) {
        this.timeout = 3000;
            require('./../datafeed/data.feed')(function (dataFeed) {
                dataFeed.forEach(function (data) {
                    Object.keys(data).forEach(function(key) {
                        switch (key) {
                            case 'url':
                                expect(key).to.be.a('string');
                                break;
					        case 'headline':
							    expect(key).to.be.a('string');
							    break;
						    case 'imageUrl':
							    expect(key).to.be.a('string');
							    break;
						    case 'byLine':
							    expect(key).to.be.a('string');
							    break;
						    default:
							    break;
					    }
				    });
			    });
        	done();
       	});
    });
});