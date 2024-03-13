const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const numArr = input[0].split(" ").map(Number);

let totalArr = [];

for (let i = 0; i < numArr.length; i++) {
  for (let j = i + 1; j < numArr.length; j++) {
    for (let k = j + 1; k < numArr.length; k++) {
      let total = numArr[i] + numArr[j] + numArr[k];
      if (total <= m) {
        totalArr.push(total);
      }
    }
  }
}

console.log(Math.max(...totalArr));
