var input = require("fs").readFileSync(0).toString().trim().split("\n");
const a = Number(input[0]);
const b = Number(input[1]);

if (a > 0 && b > 0) {
  console.log(1);
} else if (a > 0 && b < 0) {
  console.log(4);
} else if (a < 0 && b > 0) {
  console.log(2);
} else {
  console.log(3);
}
