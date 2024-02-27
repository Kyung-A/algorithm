const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// 분모가 짝수이면? (=2) => 분자의 숫자 범위까지 1, 2 오름차순 / 분모는 내림차순
// 1/4 이면? => 분자는 1, 2, 3, 4 / 분모는 4, 3, 2, 1

// 분모가 홀수이면? (=1) => 분자의 숫자 범위까지 3, 2, 1 내림차순 / 분자는 오름차순
// 5/1 이면? => 분자는 5, 4, 3, 2, 1 / 분모는 1, 2, 3, 4, 5

let n = Number(input);
let count = 0;

while (n > 0) {
  count++;
  n = n - count;
}
if (count % 2 === 0) {
  // 짝수이면?
  console.log(`${count + n}/${1 + -n}`);
} else {
  // 홀수이면?
  console.log(`${1 + -n}/${count + n}`);
}
