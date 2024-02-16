const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let result = "";
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 97)
);

alphabet.forEach((str) => {
  result += `${input.indexOf(str)} `;
});

console.log(result);
