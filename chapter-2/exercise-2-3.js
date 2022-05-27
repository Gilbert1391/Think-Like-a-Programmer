/*
 *   Exercise 2-3
 *
 *   Using only single-character output statements that output a hash mark,
 *   a space, or an end-of-line symbol, write a program that outputs the
 *   following shape:
 *
 *   #            #
 *    ##        ##
 *     ###    ###
 *      ########
 *      ########
 *     ###    ###
 *    ##        ##
 *   #            #
 */

const exc = () => {
  const buildSpace = (n) => " ".repeat(n);
  const buildPound = (n) => "#".repeat(n);
  let length = 12;
  for (let i = 0; i < 4; i++) {
    console.log(
      `${buildSpace(i)}${buildPound(i + 1)}${buildSpace(length)}${buildPound(
        i + 1
      )}${buildSpace(i)}`
    );
    length -= 4;
  }
  length = 0;
  for (let i = 4; i > 0; i--) {
    console.log(
      `${buildSpace(i - 1)}${buildPound(i)}${buildSpace(length)}${buildPound(
        i
      )}${buildSpace(i - 1)}`
    );
    length += 4;
  }
};
