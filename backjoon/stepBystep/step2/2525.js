const [date, minute] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [h, m] = date
  .trim()
  .split(" ")
  .map((num) => Number(num));

const totalMinute = h * 60 + m + Number(minute);
const hour = Math.floor(totalMinute / 60);
console.log(`${hour >= 24 ? hour - 24 : hour} ${totalMinute % 60}`);
