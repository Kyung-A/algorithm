const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  let arr = input[i].toString().trim().split(" ").map(Number);
  console.log(arr[0] + arr[1]);
}
