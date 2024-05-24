function selectionSort(arr) {
  // 내 풀이
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] > arr[j]) {
  //         [arr[i], arr[j]] = [arr[j], arr[i]];
  //       }
  //     }
  //   }

  // 강의에서 나온 방법
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    // 배열에 0이 있다면, 0은 if문에서 제외라서 0과 0을 비교하는 사태가 발생
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
      // [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([8, 1, 2, 3, 4, 5]));
