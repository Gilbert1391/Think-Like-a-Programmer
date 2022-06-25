/*
Write a program that encodes and decode a text using a
substitution cipher.

example: "hello world" <--> "svool dliow"
*/

const cipher = (plainText, mode) => {
  const text = plainText.toLowerCase().split("");

  const reverseCipher = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a",
  };

  let result = "";
  if (mode === "encode") {
    text.forEach(
      (c) => (result += reverseCipher[c] !== undefined ? reverseCipher[c] : c)
    );
  } else if ("decode") {
    text.forEach((c) => {
      for (let key in reverseCipher) {
        if (c === key) result += reverseCipher[key];
      }
      if (!Object.hasOwn(reverseCipher, c)) result += c;
    });
  }
  return result;
};
