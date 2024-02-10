var input = require("fs").readFileSync("/dev/stdin").toString().trim();

let result = 0;
for (let i = 1; i <= input; i++) {
  result += i;
}
console.log(result);

// 빠른 정답풀이
// var input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
// console.log((input * (input + 1)) / 2);
