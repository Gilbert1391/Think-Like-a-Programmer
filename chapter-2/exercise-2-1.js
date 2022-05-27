/*
Exercise 2-1

Using only single-character output statements that output a hash mark,
a space, or an end-of-line symbol, write a program that outputs the
following shape:

########
 ######
  ####
   ##
*/

const exc = () => {
  let numOfPounds = 8;
  for (let i = 0; i < 4; i++) {
    console.log(`${" ".repeat(i)}${"#".repeat(numOfPounds)}`);
    numOfPounds -= 2;
  }
};

exc();
