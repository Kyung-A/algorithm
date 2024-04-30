// 다중 포인터 패턴
const input = [-3, -2, -1, 0, 1, 2, 3];

// 나의 풀이
// 0이 되는 모든 쌍을 찾는게 아니라 최초로 걸리는 1개만 반환하는게 문제인가봄...
// 무조건 배열이 음수에서 양수로 오름차순으로 정렬되어있기에 해당 값에 더했는데 0이 아니었고,
// 더하려는 값이 해당값보다 작아지면 탐색을 종료하고 다음 값으로 넘어가는게 핵심인가봄
for (let i = 1; i <= input.length; i++) {
  if (input[i - 1] === 0 || input.at(-i) === 0) return;
  if (input[i - 1] + input.at(-i) === 0) {
    console.log([input[i - 1], input.at(-i)]);
  }
}

// 강사 풀이
function sumZero(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let sum = arr[leftIndex] + arr[rightIndex];

    if (sum === 0) {
      return [arr[leftIndex], arr[rightIndex]];
    } else if (sum > 0) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
}

console.log(sumZero(input));
