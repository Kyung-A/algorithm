// 나의 풀이
function maxSubarraySum(arr, index) {
  if (arr.length === 0) return null;
  let start = 0;
  let result = [];

  while (start < arr.length - index) {
    let total = 0;
    for (let i = start; i < start + index; i++) {
      total += arr[i];
    }
    result.push(total);
    start++;
  }
  return Math.max(...result);
}

// 강사 풀이
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity; // 음수 방지
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// 슬라이딩 윈도우 예시
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;
  // maxSum 초기값 설정
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // 이전 숫자를 빼고 마지막 숫자를 더한다
  // 1 + 2 + 3 = 6 이 있고,
  // 그 다음 2 + 3 + 4 의 합계를 알아볼 차례라고 친다면,
  // 사실상 앞서 2 + 3의 합계는 나와있으니,
  // 이전 합계에서 1을 빼고 그다음 새롭게 더할 숫자인 4를 더 한다
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
