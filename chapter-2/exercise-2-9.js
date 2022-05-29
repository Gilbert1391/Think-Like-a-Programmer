/*

Exercise 2-9

Write a program that reads a line of text, counting the number of words, 
identifying the length of the longest word and the greatest number of vowels in a word
*/

const exc = (text) => {
  const words = text.toLowerCase().split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  let longesthWord = 0;
  let greatestNumOfVowels = 0;
  words.forEach((w) => {
    longesthWord = Math.max(longesthWord, w.length);
    let curr = 0;
    w.split("").forEach((e) => {
      if (vowels.includes(e)) {
        curr += 1;
        greatestNumOfVowels = Math.max(greatestNumOfVowels, curr);
      }
    });
  });
  return { longesthWord, greatestNumOfVowels };
};
