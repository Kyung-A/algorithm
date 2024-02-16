const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const num1 = [...input[0]].reverse().join("");
const num2 = [...input[1]].reverse().join("");
console.log(num1 > num2 ? num1 : num2);
