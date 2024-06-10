const fs = require("fs");
const [[n, k], [...arr]] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let count = 0;
let result = "";

function partition(arr, start, end) {
  let pivot = arr[end];
  let swapIdx = start - 1;

  for (let i = start; i < end; i++) {
    if (pivot >= arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
      if (++count === k) result = arr.join(" ");
    }
  }

  if (swapIdx + 1 !== end) {
    [arr[swapIdx + 1], arr[end]] = [arr[end], arr[swapIdx + 1]];
    if (++count === k) result = arr.join(" ");
  }

  return swapIdx + 1;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

quickSort(arr);

if (result === "") {
  console.log(-1);
} else {
  console.log(result);
}
