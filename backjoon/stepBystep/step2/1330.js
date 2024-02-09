var input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
let result = "";

if (a < b) {
  result = "<";
} else if (a > b) {
  result = ">";
} else {
  result = "==";
}

console.log(result);
