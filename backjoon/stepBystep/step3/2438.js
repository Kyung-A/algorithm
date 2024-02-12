const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let result = "";

for (let i = 0; i < input; i++) {
  console.log((result += "*"));
}
