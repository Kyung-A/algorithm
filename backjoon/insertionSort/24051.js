const [input, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 도대체 왜 틀리는지 모르겠고...
const [n, k] = input.trim().split(" ").map(Number);
const nums = arr[0].split(" ").map(Number);
let count = -1;

for (let i = 1; i < n; i++) {
  let curVal = nums[i];
  let j = i - 1;

  while (j >= 0 && nums[j] > curVal) {
    count += 1;
    nums[j + 1] = nums[j];

    if (count === k) {
      console.log(nums[j + 1]);
    }

    j--;
  }

  nums[j + 1] = curVal;
  count += 1;

  if (count === k) {
    console.log(nums[j + 1]);
  }
}

if (count < k) {
  console.log(-1);
}
