const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let set = new Set();
input.forEach((v) => {
  set.add(v % 42);
});

console.log(set.size);
