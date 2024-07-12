// 해당 인덱스의 값을 추출
function getDigit(num, index) {
  // 내가 생각한 방법
  //   const reverse = [...String(num)].reverse().join("");
  //   const digit = reverse[index] ? Number(reverse[index]) : 0;
  //   return digit;

  // 강의 솔루션
  // Math.abs 절대값 (음수 방지용)
  // Math.pow 거듭제곱
  // 10, 100, 1000 ... 으로 자릿수를 알아냄
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

// 가장 큰 수의 자릿수 계산
function digitCount(num) {
  // 내가 생각한 솔루션
  //   return [...String(num)].length;

  // 강의 솔루션
  // 절대값 계산을 넣는 이유는 음수가 들어왔을때를 위해서다
  if (num === 0) return 1; // 값이 0일때의 자릿수를 위한 특이 케이스
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 배열에서 가장 자릿수가 많은 (가장 큰 수) 수가 무엇인지
function mostDigits(arr) {
  let maxDigits = 0;
  arr.forEach((v) => {
    maxDigits = Math.max(maxDigits, digitCount(v));
  });

  return maxDigits;
}

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
    // length은 몇진수냐에따라 설정해주기
    let digitBuckets = Array.from({ length: 10 }, () => []);

    arr.forEach((v) => {
      let digit = getDigit(v, k);
      digitBuckets[digit].push(v);
    });

    arr = [].concat(...digitBuckets);
  }

  return arr;
}

console.log(radixSort([123, 5346547, 124]));
