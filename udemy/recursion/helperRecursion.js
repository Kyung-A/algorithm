function collectOdds(arr) {
  let result = [];

  function helper(arg) {
    if (arg.length === 0) return;

    if (arg[0] % 2 !== 0) {
      result.push(arg[0]);
    }
    helper(arg.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6]));

// 위 코드를 순수 재귀로 변경
function collectOdds(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // 함수가 끝났을때 반환되는 값과 그 다음 함수가 실행될때 대체되는 값을 주의해서 봐야한다
  newArr = newArr.concat(collectOdds(arr.slice(1)));

  return newArr;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6]));
