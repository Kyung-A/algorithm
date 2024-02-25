const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const maxNum = Math.max(...[].concat(...input));

console.log(maxNum);
for (let i = 0; i < input.length; i++) {
  const arr = input[i];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === maxNum) {
      console.log(i + 1, j + 1);
    }
  }
}
