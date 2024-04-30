// 빈도수 세기 패턴

// 나의 풀이
arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);
const result = arr1.every((num1, i) => Math.pow(num1, 2) === arr2[i]);
console.log(result);

// 강사 풀이
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}
console.log(same(arr1, arr2));
