const [m, n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = [];
let total = 0;

const sqrt = (num) => {
  if (num < 2) return;
  const x = Math.floor(Math.sqrt(num));
  for (let j = 2; j <= x; j++) {
    if (num % j === 0) return; // 소수가 아님
  }
  arr.push(num);
  total += num;
};

for (let i = m; i <= n; i++) {
  sqrt(i);
}

console.log(total !== 0 ? `${total}\n${arr[0]}` : -1);
