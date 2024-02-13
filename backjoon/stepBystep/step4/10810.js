const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].toString().trim().split(" ").map(Number);

let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = 0;
}

// 위에 반복문 대체
// const basket = new Array(n).fill(0);

for (let i = 1; i <= m; i++) {
  let [start, end, k] = input[i].toString().trim().split(" ").map(Number);
  for (let j = start - 1; j < end; j++) {
    arr[j] = k;
  }
}

console.log(arr.join(" "));
