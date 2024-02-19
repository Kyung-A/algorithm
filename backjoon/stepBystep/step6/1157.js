const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toUpperCase();

const map = new Map();

[...input].forEach((str) => {
  if (!map.has(str)) {
    map.set(str, 1);
  } else {
    map.set(str, map.get(str) + 1);
  }
});

let count = 0;
let result = "";

for (let [key, value] of map) {
  if (value > count) {
    count = value;
    result = key;
  } else if (value === count) {
    result = "?";
  }
}

console.log(result);
