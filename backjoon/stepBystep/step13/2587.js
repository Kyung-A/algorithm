const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  let last = i;
  for (let j = 0; j < i; j++) {
    if (arr[last] < arr[j]) {
      last = j;
    }
  }

  sum += arr[last];
  if (i !== last) {
    [arr[i], arr[last]] = [arr[last], arr[i]];
  }
}

console.log(sum / arr.length);
console.log(arr[Math.floor(arr.length / 2)]);
