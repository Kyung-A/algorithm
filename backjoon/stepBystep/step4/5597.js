const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

const arr = Array.from({ length: 30 }, (_, index) => index + 1);

arr.forEach((v) => {
  if (!input.some((num) => num === v)) console.log(v);
});

// 굳이 배열 안만들고 해도됨
// for (let i = 1; i <= 30; i++) {
//   if (!input.some((num) => num === i)) console.log(i);
// }
