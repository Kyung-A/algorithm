const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 100x100 배열을 일단 0으로 초기화
// 종이가 놓여진 자리는 1
// 종이가 겹쳐진 자리는 2
let result = 0;
const confettiNum = Number(input.shift());
const arr = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 0; i < confettiNum; i++) {
  const confetti = input[i].split(" ").map(Number);
  const x = confetti[0];
  const y = confetti[1];
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      // 배열 원소에 1을 바로 더하고 1을 또 마주했을때
      if (++arr[j][k] == 1) {
        result++; // 2가 되는 시점
      }
    }
  }
}

console.log(result);
