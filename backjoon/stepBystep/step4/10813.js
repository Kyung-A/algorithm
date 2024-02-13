const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].toString().trim().split(" ").map(Number);

let basket = [];
for (let i = 0; i < n; i++) {
  basket[i] = i + 1;
}
// 위 반복문을 줄이는 코드
// const basket = Array.from({ length: n }, (_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  const [basket1, basket2] = input[i].toString().trim().split(" ").map(Number);
  const num1 = basket[basket1 - 1];
  const num2 = basket[basket2 - 1];
  basket[basket1 - 1] = num2;
  basket[basket2 - 1] = num1;
}

console.log(basket.join(" "));
