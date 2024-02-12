var input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let arr = input[i].toString().trim().split(" ").map(Number);
  console.log(`Case #${i}: ${arr[0] + arr[1]}`);
}
