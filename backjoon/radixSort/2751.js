const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 해당 인덱스의 값을 추출
function getDigit(num, i) {
  return Math.floor((num / Math.pow(10, i)) % 10);
}

// 가장 큰 수의 길이 개수
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 배열에서 가장 큰 수의 자릿수 추출
function mostDigits(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]));
  }
  return max;
}

// 정렬
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);

  for (let i = 0; i < maxDigitCount; i++) {
    let positiveDigitBuckets = Array.from({ length: 10 }, () => []);
    let negativeDigitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);

      if (digit < 0) {
        negativeDigitBuckets[Math.abs(digit)].push(nums[j]);
      } else {
        positiveDigitBuckets[digit].push(nums[j]);
      }
    }

    nums = [].concat(
      ...negativeDigitBuckets.reverse(),
      ...positiveDigitBuckets
    );
  }

  return nums.join("\n");
}

console.log(radixSort(arr));
