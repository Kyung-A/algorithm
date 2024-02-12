var input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const total = Number(input[0]);
const numTypeObj = Number(input[1]);
let result = 0;

for (let i = 2; i <= numTypeObj + 1; i++) {
  let arr = input[i].toString().trim().split(" ").map(Number);
  result += arr[0] * arr[1];
}

console.log(total === result ? "Yes" : "No");
