// 시간복잡도
const n = require("fs").readFileSync("/dev/stdin").toString().trim();

// n이 7이면
// i가 1일때 j는 6번 돌고
// i가 2일때 j는 5번 돌고
// ....
// i가 6일때 j는 1번 돈다
// 1~6까지 더한 횟수가 최종 실행횟수
console.log((n * (n - 1)) / 2);
console.log(2);
