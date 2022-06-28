/*
Write a program that is given an array of intgers and find the mode, 
which is the number that appears the most frequently in the array.

example: 5, 2, 3, 8, 5, 5, 3 -> 5 is the mode. 
*/

const findTheMode = (data) => {
  const arr = data.sort((a, b) => a - b);
  let curr = 0;
  let highest = 0;
  let mode;
  for (let i = 0; i < arr.length; i++) {
    curr++;
    if (i !== arr.length - 1 && arr[i] !== arr[i + 1]) {
      if (curr > highest) {
        highest = curr;
        mode = arr[i];
      }
      curr = 0;
    }
  }
  return mode;
};

findTheMode(arr);
