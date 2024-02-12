var input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = Number(input[0]);
let result = "";

for (let i = 1; i <= testCase; i++) {
  let arr = input[i].toString().trim().split(" ").map(Number);
  result += `${arr[0] + arr[1]}\n`;
}

console.log(result);
