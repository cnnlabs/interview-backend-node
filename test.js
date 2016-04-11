var chai = require('chai'),
    json = require('./main.js');
    expect = require('chai').expect;


describe('', function(){
  before(function () {
    json.begin;
  });

  it('is a valid JSON object', function(){
    expect(json.finalProduct).to.be.a('array');
  });
  it('should not be empty array', function(){
    expect(json.finalProduct).to.not.be.empty;
  });
  it('has the spec keys', function(){
    expect(json.finalProduct).to.have.all.keys('url', 'headline', 'imageUrl', 'byLine')
  });

});


