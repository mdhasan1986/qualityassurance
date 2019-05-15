let assert = require('assert');
let textManipulator = require('../app.js');


describe('checkTheDataType', function(){

  it ('Should return number when given a number as an argument', function() {
      assert.equal('number', textManipulator.checkTheDataType(42));
  });

  it ('Should return null when given null as an argument', function() {
      assert.equal('null', textManipulator.checkTheDataType(null));
  });

  it ('Should return an error if not given an argument', function() {
      assert.equal('need an argument', textManipulator.checkTheDataType());
  });

});

describe('longestWord', function(){

  it('Should return "jumped"', function() {
    assert.equal('jumped', textManipulator.longestWord('The quick red fox jumped over the lazy dog'));
  });

  it('Should return a really long word', function() {
    assert.equal('otorhinolaryngology', textManipulator.longestWord('What if we tried a really long word like otorhinolaryngology'));
  });

  it('Should return the longest number if given numbers as parametres', function() {
    assert.equal('1226464', textManipulator.longestWord('1226464 300 2 4756'));
  });

  it('Should return null if the parameter is not in text', function() {
    assert.equal(null, textManipulator.longestWord(3000));

  });

});


describe ('howManyVowels', function() {

  it('Should return 3 when given a word with 3 vowels', function() {
    assert.equal(3, textManipulator.howManyVowels('looper'));
  });

  it('Should return 0 when given a word with 0 vowels', function() {
    assert.equal(0, textManipulator.howManyVowels('shh'));
    assert.equal(0, textManipulator.howManyVowels('hgrfcs'));
  });

  it('Should return 0 when given an empty string', function() {
    assert.equal(0, textManipulator.howManyVowels());
  });



  it('Should return 0 when given any other data type', function() {
    assert.equal(0, textManipulator.howManyVowels(null));
    assert.equal(0, textManipulator.howManyVowels(32));
    assert.equal(0, textManipulator.howManyVowels(undefined));
  });

})
