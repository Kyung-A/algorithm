const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number);

for (let i = 1; i < arr.length; i++) {
  let curVal = arr[i];
  let j;
  for (j = i - 1; j >= 0 && arr[j] < curVal; j--) {
    arr[j + 1] = arr[j];
  }
  arr[j + 1] = curVal;
}

console.log(arr.join(""));
