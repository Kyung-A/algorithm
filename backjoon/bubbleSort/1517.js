var [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 시간초과 - 추후에 다시 풀기
const nums = arr[0].split(" ").map(Number);
let swapCount = 0;
let noSwaps = false;

for (let i = n; i > 0; i--) {
  noSwaps = true;

  for (let j = 0; j < i - 1; j++) {
    if (nums[j] > nums[j + 1]) {
      [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      swapCount += 1;
      noSwaps = false;
    }
  }

  if (noSwaps) break;
}

console.log(swapCount);
