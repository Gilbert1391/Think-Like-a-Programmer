// Consider an array representing a binary string
// where each element is 0 or 1.
// Write a bool func to determine whether the binary
// string has odd parity (an odd number of 1 bits).
// Return true (odd) or false (even)

// Odd parity: the number of 1-bit must add up to an odd number -> 1000

function exc(str, idx) {
  const isOdd = str[idx] === "1";
  if (idx === str.length - 1) return isOdd ? 1 : 0;
  const oddCount = exc(str, idx + 1);
  if (idx === 0) {
    const total = isOdd ? oddCount + 1 : oddCount;
    return total % 2 === 1;
  } else {
    return isOdd ? oddCount + 1 : oddCount;
  }
}

const str = "00001011";
exc(str, 0);
