const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => +el));
const [n, m] = input.shift();

let arr = new Array(n).fill().map(() => new Array(m).fill(0));
let result = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    arr[i][j] = input[i][j] + input[i + n][j];
  }
}
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    result += arr[i][j] + " ";
  }
  result += "\n";
}

console.log(result);

// 나의 오답 (런타임 에러)
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
// const [n, m] = input[0].split(" ").map(Number);

// let arrA = [];
// let arrB = [];
// let result = "";
// for (let i = 1; i <= m; i++) {
//   const processionA = input[i].split(" ").map(Number);
//   const processionB = input[i * 2].split(" ").map(Number);
//   arrA.push(processionA);
//   arrB.push(processionB);
// }

// for (let i = 0; i < m; i++) {
//   let arr = [];
//   for (let j = 0; j < n; j++) {
//     arr.push(arrA[i][j] + arrB[i][j]);
//   }
//   result += `${arr.join(" ")}\n`;
// }

// console.log(result);
