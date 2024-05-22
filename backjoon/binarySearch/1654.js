var [m, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [k, n] = m.split(" ").map(Number);
const nums = arr.map(Number).sort((a, b) => a - b);

let start = 1;
let end = nums[nums.length - 1];
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let sum = 0;

  for (let num of nums) {
    sum += Math.floor(num / mid);
  }

  if (sum < n) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
