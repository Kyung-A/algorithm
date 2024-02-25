const [n, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 10진법 => B진수로 변환
// B / N을 더이상 나눌 수 없을때까지 나눈다
// 나누고 나왔던 각각의 나머지값들을 역순으로 읽으면 된다
let tmp = n;
let arr = [];
let result = "";

while (tmp !== 0) {
  arr.push(tmp % b);
  tmp = Math.floor(tmp / b);
}

arr.reverse().forEach((num) => {
  if (num + 55 >= "A".charCodeAt() && num + 55 <= "Z".charCodeAt()) {
    result += String.fromCharCode(num + 55);
  } else {
    result += String(num);
  }
});

console.log(result);

// 빠른풀이
// console.log(n.toString(b).toUpperCase());
