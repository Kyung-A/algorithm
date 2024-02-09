var input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const a = Number(input[0]);
const b = Number(input[1]);
const numArr = [...input[1]].reverse();

numArr.forEach((num) => {
  console.log(a * Number(num));
});

console.log(a * b);
