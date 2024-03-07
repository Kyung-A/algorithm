const [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const total = a + b + c;
const xor = a ^ b ^ c;
const bool = [a, b, c].some((v) => v === xor);
const everyoneIs60 = [a, b, c].every((v) => v === 60);

if (everyoneIs60) {
  console.log("Equilateral");
} else if (total === 180 && bool) {
  console.log("Isosceles");
} else if (total === 180 && !bool) {
  console.log("Scalene");
} else {
  console.log("Error");
}

// 숏코딩 답
console.log(
  a + b + c != 180
    ? "Error"
    : a == b && b == c
    ? "Equilateral"
    : a == b || b == c || a == c
    ? "Isosceles"
    : "Scalene"
);
