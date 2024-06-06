function pivot(arr, start = 0, end = arr.length + 1) {
  let piovt = arr[start];
  let swapIdx = start;

  // 피봇을 중심 그 다음 값들 서로 비교하여 교체한다
  for (let i = start + 1; i < arr.length; i++) {
    if (piovt > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }

  // 마지막으로 피봇값이 있어야할 자리로 교체한다
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  // 피봇 인덱스는 값이 작을때만 증가하기에
  // 재귀가 실행됨에따라 점점 piovtIndex 값은 작아지고
  // right값은 점점 왼쪽으로 이동하게 됨
  // 그러므로 left, right값이 일치하는 순간이 와버림
  if (left < right) {
    let piovtIndex = pivot(arr, left, right);
    // 피봇을 중심으로 왼쪽, 오른쪽 나눠서 재귀
    // 왼쪽 (작은수) 먼저 정렬하게 되고
    quickSort(arr, left, piovtIndex - 1);
    // 왼쪽 정렬이 완료되면 그 다음 오른쪽 (큰 수) 정렬한다
    quickSort(arr, piovtIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
