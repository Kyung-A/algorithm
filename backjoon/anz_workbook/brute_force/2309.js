var input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let total = 0;
let result = [];

for (let i = 0; i < 9; i++) {
  total += input[i];
}

for (let i = 0; i < 9; i++) {
  for (let j = 1; j < 9; j++) {
    const minus = input[i] + input[j];
    if (total - minus === 100) {
      result = input.filter((v) => v !== input[i] && v !== input[j]);
    }
  }
}

console.log(result.sort((a, b) => a - b).join("\n"));
