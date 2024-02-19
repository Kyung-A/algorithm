const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let result = input;

for (let str of croatia) {
  result = result.replaceAll(str, "Q");
}

console.log(result.length);
