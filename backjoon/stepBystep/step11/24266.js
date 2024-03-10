// 시간복잡도
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// 입력 최대 범위를 초과해서 변환이 필요함
let n = BigInt(input);

console.log(`${n * n * n}`);
console.log("3");
