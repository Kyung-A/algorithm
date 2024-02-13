const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].toString().trim().split(" ").map(Number);

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);

// min, max를 안쓴 정답풀이
// let n = Number(input[0]);
// let list = input[1].split(" ");

// let max = -1000000;
// let min = 1000000;

// for (let i = 0; i < n; i++) {
//   let value = Number(list[i]);
//   if (value < min) min = value;
//   if (value > max) max = value;
// }
