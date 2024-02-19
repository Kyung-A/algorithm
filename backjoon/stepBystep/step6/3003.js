const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const chess = [1, 1, 2, 2, 2, 8];

const result = input.reduce((acc, cur, index) => {
  return [...acc, chess[index] - cur];
}, []);

console.log(result.join(" "));
