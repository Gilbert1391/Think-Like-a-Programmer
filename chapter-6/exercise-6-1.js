// Given an array of integers, return
// the sum of only positive numbers;

const arr = [-4, 2, -1, 3, -2]; // -> 5

function rec(arr, size) {
  if (size === 0) return arr[size] > 0 ? arr[size] : 0;
  let sum = rec(arr, size - 1);
  if (arr[size] > 0) sum += arr[size];
  return sum;
}

rec(arr, arr.length - 1);
