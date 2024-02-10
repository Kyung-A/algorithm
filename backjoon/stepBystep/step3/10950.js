var input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let NumberArr = input[i].toString().trim().split(" ").map(Number);
  console.log(NumberArr[0] + NumberArr[1]);
}
