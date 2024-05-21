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

console.log(binarySearch([1, 2, 3, 4, 5], 2));
