const [n, arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = 0;
for (let i = 0; i < n; i++) {
  let num = arr.toString().trim().split(" ").map(Number)[i];
  let count = 0;

  for (let j = 1; j <= num; j++) {
    if (num % j === 0) {
      count += 1;
    }
  }

  if (count === 2) {
    result += 1;
  }
}

console.log(result);

// 제곱근을 활용한 풀이
function p(k) {
  if (k < 2) return false; // 1은 제외

  const x = Math.floor(Math.sqrt(k)); // 제곱근 활용 (제곱하여 그 수가 되는 수를 의미)

  for (let i = 2; i <= x; ++i) {
    if (k % i === 0) {
      return false;
    }
  }
  return true;
}
