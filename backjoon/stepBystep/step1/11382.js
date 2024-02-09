var input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let result = 0;
input.forEach((num) => (result += Number(num)));

console.log(result);
