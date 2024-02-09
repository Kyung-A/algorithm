const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => Number(num))
  .sort((a, b) => b - a);

const map = new Map();

input.forEach((num) => {
  if (!map.has(num)) {
    map.set(num, 1);
  } else {
    map.set(num, map.get(num) + 1);
  }
});

if (map.size === 3) {
  console.log(input[0] * 100);
}

for (let [key, value] of map) {
  if (value === 2) {
    console.log(1000 + key * 100);
  } else if (value === 3) {
    console.log(10000 + key * 1000);
  }
}
