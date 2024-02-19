const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const reverseStr = [...input].reverse().join("");
console.log(input === reverseStr ? 1 : 0);
