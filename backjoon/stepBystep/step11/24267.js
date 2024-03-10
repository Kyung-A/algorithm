// 시간복잡도
const n = require("fs").readFileSync("/dev/stdin").toString().trim();

// i가 1일때 j는 2, k는 3, 4, 5, 6, 7
// i가 2일때 j는 3, k는 4, 5, 6, 7
// i가 3일때 j는 4, k는 5, 6, 7
// i가 4일때 j는 5, k는 6, 7
// i가 5일때 j는 6, k는 7
// i, j, k는 중복없는 조합을 만들어낸다
const result = (BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6);
console.log(String(result));
console.log(3);
