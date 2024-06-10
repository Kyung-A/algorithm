const fs = require("fs");
const [[n, k], [...arr]] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let count = 0;
let result = [];

// 해당 문제는 비교를 뒤에서부터 시작해야지 해결할 수 있음
function partition(arr, start, end) {
  // 배열의 마지막 요소를 피봇으로 지정
  let pivot = arr[end]; // 마지막 index부터 시작 (기준값)
  let swapIdx = start - 1; // 최초 -1부터 시작 (pivot보다 작거나 작은 원소들의 끝 지점)

  // 마지막 index와 첫번째 index 비교 시작 (역순)
  for (let i = start; i < end; i++) {
    if (pivot >= arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];

      // count++ -> 1, 4, 9, 비교 후 count 증가
      // ++count -> 1, 3, 7, 증가된 count 값으로 비교
      if (++count === k) result.push(arr[swapIdx], arr[i]);
    }
  }

  // 피봇이 이미 swapIdx + 1 위치에 있을 경우 교환 X
  // 불필요한 교환을 방지하기위해 조건문 추가
  if (swapIdx + 1 !== end) {
    [arr[swapIdx + 1], arr[end]] = [arr[end], arr[swapIdx + 1]];
    if (++count === k) result.push(arr[swapIdx + 1], arr[end]);
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

if (result.length > 0) {
  console.log(result.join(" "));
} else {
  console.log(-1);
}
