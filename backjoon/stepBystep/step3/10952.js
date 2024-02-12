const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  let arr = input[i].toString().trim().split(" ").map(Number);
  if (arr[0] > 0 && arr[1] > 0) console.log(arr[0] + arr[1]);
}
