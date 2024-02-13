const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].toString().trim().split(" ").map(Number);
const basket = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  const [start, end] = input[i].toString().trim().split(" ").map(Number);
  let arr = [];
  for (let j = start - 1; j < end; j++) {
    arr.push(basket[j]);
  }
  arr.reverse();
  basket.splice(start - 1, end - start + 1, ...arr);
}

console.log(basket.join(" "));
