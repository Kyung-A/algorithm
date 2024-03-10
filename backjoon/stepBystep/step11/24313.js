// 시간복잡도
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [a1, a0] = input[0].split(" ").map(Number);
const c = input[1];
const n0 = input[2];

// 참이 되는 조건
// fn은 c * gn보다 작거나 같다

// n은 무조건 n0보다 크거나 같은 값이다
// n에 n0을 대입하면 모든 n에 대해 참이 되는거다

// gn과 fn은 무엇인가
// gn은 그냥 n이다
// fn은 a1 * n + a0이다
const fn = a1 * n0 + a0;

// a0이 음수일 경우를 예외처리
if (fn <= c * n0 && a1 <= c) {
  console.log(1);
} else {
  console.log(0);
}
