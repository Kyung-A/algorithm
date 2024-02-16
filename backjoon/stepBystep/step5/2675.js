const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  const str = input[i].toString().trim().split(" ");
  const r = Number(str[0]);
  let result = "";
  [...str[1]].forEach((str) => {
    result += str.repeat(r);
  });
  console.log(result);
}
