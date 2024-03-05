const [x, y, w, h] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let arr = [x, y, w - x, h - y];
console.log(Math.min(...arr));
