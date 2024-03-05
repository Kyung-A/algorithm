const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = input.shift();

let x = [];
let y = [];
for (let i = 0; i < n; i++) {
  const arr = input[i].toString().trim().split(" ").map(Number);
  x.push(arr[0]);
  y.push(arr[1]);
}

console.log(
  (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
);
