const assert = require('assert'),
    expect = require('chai').expect,
    utils = require('../loader');

describe('Extra Credit', function() {

  var output;

  before(function(done) {
    utils.getArticles().then(function(result){
      output = result;
      done();
    })
  });

  describe('Output Should Be An Array', function () {
    it('should be an instanceof(Array)', function () {
      expect(output).to.be.an.instanceof(Array)
    });
  });

  describe('Schema of Output Element Should Be As Expected', function () {
    it('first element should contain property \'url\'', function () {
      expect(output[0]).to.include.keys('url');
    });

    it('first element should contain property \'imageUrl\'', function () {
      expect(output[0]).to.include.keys('imageUrl');
    });

    it('first element should contain property \'headline\'', function () {
      expect(output[0]).to.include.keys('headline');
    });

    it('first element should contain property \'byLine\'', function () {
      expect(output[0]).to.include.keys('byLine');
    });
  });
});
