// 다중 포인터
// 나의 풀이
function countUniqueValues(arr) {
  const result = arr.filter((num, i) => num !== arr[i + 1]);
  return result.length;
}
console.log(countUniqueValues([1, 1, 1, 2, 3, 3]));

// 강사 풀이
function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValues([1, 1, 1, 2, 2, 3]));
