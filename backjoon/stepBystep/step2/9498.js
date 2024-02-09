var input = require("fs").readFileSync("/dev/stdin").toString().trim();

let num = Number(input);
let result = "";

if (num >= 90) {
  result = "A";
} else if (num >= 80) {
  result = "B";
} else if (num >= 70) {
  result = "C";
} else if (num >= 60) {
  result = "D";
} else {
  result = "F";
}

console.log(result);
