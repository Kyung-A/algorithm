const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input.shift();

for (let i = n; i > 0; i--) {
  for (let j = 0; j < i - 1; j++) {
    if (input[j] > input[j + 1]) {
      [input[j], input[j + 1]] = [input[j + 1], input[j]];
    }
  }
}

console.log(input.join("\n"));
