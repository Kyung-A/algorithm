function bubbleSort(arr) {
  // 방법 1
  // 3번째쯤 정렬이 되었다고 해도 무조건 배열의 길이만큼 왕복 실행
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr.length; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  //       }
  //     }
  //   }

  // 방법 2
  // 맨 끝에 오게되는 큰 수들은 더이상 비교하지 않는다
  // 반복문을 돌면서 어차피 큰 수는 계속 뒤로 밀리고 큰 수와 매번 비교를 하는 형태가 될테니 끝에 올 숫자와의 비교는 무의미하기에
  //   for (let i = arr.length; i > 0; i--) {
  //     for (let j = 0; j < i - 1; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  //       }
  //     }
  //   }

  // 방법 3
  // 정렬이 끝나면 반복문도 끝나게 하는 방법
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5]));
