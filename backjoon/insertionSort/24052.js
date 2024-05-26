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
    nums[j + 1] = nums[j];
    count += 1;
    if (count === k) {
      console.log(nums.join(" "));
    }

    j--;
  }

  nums[j + 1] = curVal;
  count += 1;
  if (count === k) {
    console.log(nums.join(" "));
  }
}

if (count < k) {
  console.log(-1);
}
