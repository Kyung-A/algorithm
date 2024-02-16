const [, input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = 0;
[...input].forEach((str) => {
  result += Number(str);
});

console.log(result);
