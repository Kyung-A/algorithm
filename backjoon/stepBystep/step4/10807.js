const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].toString().trim().split(" ").map(Number);
const v = Number(input[2]);

console.log(arr.filter((num) => num === v).length);
