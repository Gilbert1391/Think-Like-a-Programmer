// Write a func that is passed an array of integers
// and a target number and that returns the number
// of ocurrences of the target number in the array
// example: arr:[1,3,3,5,6], t:3, result -> 2

function exc(arr, length, target) {
  if (!length) return arr[length] === target ? 1 : 0;
  const freq = exc(arr, length - 1, target);
  return arr[length] === target ? freq + 1 : freq + 0;
}
const arr = [1, 3, 3, 5, 6, 31, 5, 3, 1];

exc(arr, arr.length - 1, 1);
