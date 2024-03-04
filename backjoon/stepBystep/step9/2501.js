const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let arr = [];
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    arr.push(i);
  }
}

console.log(arr[k - 1] ?? 0);
