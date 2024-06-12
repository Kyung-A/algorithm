const fs = require("fs");
const [[n], [...arr1], [...arr2]] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// 시간초과 나중에 다시 풀어보기
let result = 0;

function compare(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== arr2[i]) return false;
  }
  result = 1;
  return true;
}

function partition(arr, start, end) {
  let pivot = arr[end];
  let swapIndex = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      swapIndex++;
      [arr[swapIndex], arr[j]] = [arr[j], arr[swapIndex]];
      compare(arr);
    }
  }

  if (swapIndex + 1 !== end) {
    [arr[swapIndex + 1], arr[end]] = [arr[end], arr[swapIndex + 1]];
    compare(arr);
  }

  return swapIndex + 1;
}

function quickSort(arr, left = 0, right = arr1.length - 1) {
  if (left >= right) return;
  if (result === 1) return;

  let pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
}

quickSort(arr1);
console.log(result);
