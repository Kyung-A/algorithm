// 나의 풀이
// 실패
function minSubArrayLen(arr, sum) {
  arr.sort((a, b) => a - b);
  const num = Math.floor(sum / 2);
  const start = arr.findIndex((v) => v >= num);

  let i = start;
  let j = start + 1;
  let result = [];
  let max = 0;

  while (j < arr.length) {
    max = arr[i] + arr[j];

    if (max < sum) {
      result.push(arr[i]);
      result.push(arr[j]);
      j++;
    } else if (max === sum) {
      result.push(arr[i]);
      result.push(arr[j]);
      return result;
    } else if (arr[j] > sum) {
      result.push(arr[j]);
      return;
    } else if (max > sum) {
      result.push(arr[i]);
      result.push(arr[j]);
      return result;
    } else {
      return 0;
    }
  }
}

// 강사 풀이
function minSubArrayLen(arr, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
