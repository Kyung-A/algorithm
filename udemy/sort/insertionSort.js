// 삽입 정렬 => 데이터가 거의 정렬되어 있을 경우에 유용
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    let j;
    // 반복을 모두 실행하지 않음
    for (j = i - 1; j >= 0 && arr[j] > curVal; j--) {
      // 배열 끝에서부터 탐색
      // arr[j] = 76
      // curVal = 4
      // 비교 대상(arr[j])이 더 크면 비교값(curVal) 위치에 값을 삽입 -> ex. 2, 1, 9, 76, 76
      // 4가 있는 위치에(arr[j + 1]) 76(arr[j]) 를 삽입
      arr[j + 1] = arr[j];
    }
    // 들어가야할 위치에 작은수(curVal)를 삽입
    arr[j + 1] = curVal;
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 20]));
