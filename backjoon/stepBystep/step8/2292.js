const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let range = 1;
let count = 1;

while (range < Number(input)) {
  range += count * 6;
  count++;
}
console.log(count);
