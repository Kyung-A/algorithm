const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let num = input;
let arr = [];

for (let i = 2; i <= input; i++) {
  while (num % i === 0) {
    num = num / i;
    arr.push(i);
  }
  if (num === 1) break;
}

console.log(arr.join("\n"));
