function averagePair(arr, average) {
  // 통과되지 못한 코드, 반례가 뭐가 있을지 잘 모르겠다
  //   for (let i = 1; i <= arr.length; i++) {
  //     let num = arr[i - 1] + arr.at(-i) / 2;
  //     if (num === average) {
  //       return true;
  //     }
  //   }
  //   return false;

  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    let num = arr[leftIndex] + arr[rightIndex] / 2;

    if (num === average) {
      return true;
    } else {
      rightIndex--;
      leftIndex++;
    }
  }

  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
