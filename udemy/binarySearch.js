function binarySearch(arr, val) {
  let left = 1;
  let right = arr.length;

  while (left <= right) {
    let midIndex = left + Math.floor((right - left) / 2);

    if (arr[midIndex] === val) {
      return midIndex;
    } else if (arr[midIndex] < val) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }
  return -1;
}

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start <= end) {
    if (arr[mid] > val) {
      end = mid + 1;
    } else {
      start = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }

  return arr[mid] === val ? mid : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
