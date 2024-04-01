const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let initValue = 666;
let count = 0;

while (true) {
  if (String(initValue).includes("666")) {
    count += 1;
    if (count === Number(input)) break;
  }
  initValue += 1;
}

console.log(initValue);
