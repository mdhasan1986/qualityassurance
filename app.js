
let textManipulator = {};

textManipulator.checkTheDataType = function(argument) {
  if(argument === null) {
    return 'null';
  }
  if (argument === undefined) {
    return 'need an argument';
  }

  return typeof argument;
}

textManipulator.longestWord = function(text) {

if (typeof text != "string") {
  return null;
}

  let textInArray = text.split(' ');
  let longest = textInArray[0];
  for (let i = 1; i < textInArray.length; i++) {
    if (textInArray[i].length > longest.length) {
        longest = textInArray[i];
    }
  }
return longest;
}

textManipulator.longestWord('The quick red fox jumped over the lazy dog');





textManipulator.howManyVowels = function(text) {

if (typeof text != 'string') {
  return 0;
}

  let textInArray = text.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let i = 0; i < textInArray.length; i++) {
      if (vowels.includes(textInArray[i])) {
        vowelCount++;
      }
  }


  return vowelCount;
}


module.exports = textManipulator;
