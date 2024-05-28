const [input, ...nums] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.split(" ").map(Number);
const arr = nums[0].split(" ").map(Number);

for (let i = n; i > 0; i--) {
  let noSwaps = true;

  for (let j = 0; j < i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      noSwaps = false;
    }
  }

  if (noSwaps) break;
}

console.log(arr.at(k * -1));
