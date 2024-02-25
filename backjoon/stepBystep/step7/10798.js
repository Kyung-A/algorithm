const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split("").map(String));

let result = "";
const maxLeng = Math.max(...input.map((arr) => arr.length));

for (let i = 0; i < maxLeng; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j] !== undefined) {
      if (input[j][i] === undefined) {
        continue;
      } else {
        result += input[j][i];
      }
    }
  }
}

console.log(result);
