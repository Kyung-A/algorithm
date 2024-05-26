const [input, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.trim().split(" ").map(Number);
const nums = arr[0].split(" ").map(Number);
let count = 0;

for (let i = n - 1; i > 0; i--) {
  let last = i;
  for (let j = 0; j < i; j++) {
    if (nums[last] < nums[j]) {
      last = j;
    }
  }

  if (i !== last) {
    count += 1;
    [nums[i], nums[last]] = [nums[last], nums[i]];
    if (count === k) {
      console.log(nums.join(" "));
    }
  }
}

if (count < k) return console.log(-1);
