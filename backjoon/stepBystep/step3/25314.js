var input = require("fs").readFileSync("/dev/stdin").toString().trim();

const count = input / 4;
let result = "";

for (let i = 0; i < count; i++) {
  result += "long ";
}

console.log(`${result}int`);
