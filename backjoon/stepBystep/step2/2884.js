var input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => Number(num));

const m = input[1];
const h = input[0] === 0 && m < 45 ? 24 : input[0];

const minute = h * 60 + m - 45;
console.log(`${Math.floor(minute / 60)} ${minute % 60}`);
