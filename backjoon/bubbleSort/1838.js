const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 시간초과 - 추후에 다시 풀기
const nums = arr[0].split(" ").map(Number);
let noSwaps = false;
let count = 0;

for (let i = Number(n); i > 0; i--) {
  noSwaps = true;

  for (let j = 0; j < i - 1; j++) {
    if (nums[j] > nums[j + 1]) {
      [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      noSwaps = false;
    }
    count = i;
  }

  if (noSwaps) break;
}

console.log(count - 1);
