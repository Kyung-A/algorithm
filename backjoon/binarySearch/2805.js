var [[n, m], [...arr]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

arr.sort((a, b) => a - b);
let start = 1;
let end = arr[arr.length - 1];
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let sum = 0;

  for (let num of arr) {
    if (num > mid) {
      sum += num - mid;
    }
  }

  if (m > sum) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
