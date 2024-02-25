const [n, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

// N진법 => 10진법으로 변환 공식
// EX. 23512, 36진법
// 2 * ( 36 ** 해당숫자의 index) + ... ===> 참고로 0자릿수는 그냥 해당 값 더하기만 한다
// N진법의 각각의 숫자에 N을 곱해간다 (두자릿수를 굳이 한자릿수로 쪼갤 필요 없음)

const char = n.split("").reverse();
let result = 0;

for (let i = 0; i < char.length; i++) {
  if (char[i] >= "A" && char[i] <= "Z") {
    char[i] = char[i].charCodeAt(0) - 55;
    result += char[i] * Math.pow(b, i);
  } else {
    char[i] = Number(char[i]);
    result += char[i] * Math.pow(b, i);
  }
}
console.log(result);

// 나의 오답
// let arr = [];
// for (let i = 0; i < n.length; i++) {
//   if (!Number(n[i])) {
//     arr.push(n[i].charCodeAt() - 55);
//   } else {
//     arr.push(n[i]);
//   }
// }

// let result = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   if (i !== 0) {
//     result += arr[i] * b ** i;
//   } else {
//     result += arr[i];
//   }
// }
// console.log(result);
