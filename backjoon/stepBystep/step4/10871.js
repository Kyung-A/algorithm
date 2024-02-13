const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, x] = input[0].toString().trim().split(" ").map(Number);
const arr = input[1].toString().trim().split(" ").map(Number);
let result = "";

arr.forEach((num) => {
  if (x > num) {
    result += `${num} `;
  }
});

console.log(result);
