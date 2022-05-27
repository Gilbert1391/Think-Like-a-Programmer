/*const buildString = (numOfSpaces, numOfPoundsChar) => {
  const spaces = " ";
  const pounds = "#";
  return `${spaces.repeat(numOfSpaces)}${pounds.repeat(numOfPoundsChar)}`;
};
*/

const exc = () => {
  let numOfPounds = 8;
  for (let i = 0; i < 4; i++) {
    console.log(`${" ".repeat(i)}${"#".repeat(numOfPounds)}`);
    numOfPounds -= 2;
  }
};

exc();
