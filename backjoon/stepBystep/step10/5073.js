const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [a, b, c] = input[i]
    .toString()
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (c < a + b) {
    if (a === b && b === c && a === c) {
      console.log("Equilateral");
    } else if (a !== b && b !== c && a !== c) {
      console.log("Scalene");
    } else if (a === b || b === c || a === c) {
      console.log("Isosceles");
    }
  } else {
    console.log("Invalid");
  }
}
