const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  const strArr = input[i].toString().trim();
  console.log(`${strArr.at(0)}${strArr.at(-1)}`);
}
