var [input, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.trim().split(" ").map(Number);
const nums = arr[0].split(" ").map(Number);
let swapCount = 0;
let noSwaps = false;

for (let i = n; i > 0; i--) {
  noSwaps = true;

  for (let j = 0; j < i - 1; j++) {
    if (nums[j] > nums[j + 1]) {
      [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      swapCount += 1;
      if (swapCount === k) {
        console.log(nums[j], nums[j + 1]);
      }
      noSwaps = false;
    }
  }
  if (noSwaps) {
    if (swapCount < k) console.log(-1);
    break;
  }
}
