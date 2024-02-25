let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .filter((str, index) => index !== 0);

let result = "";

// 풀이를 본 답 => 그치만 틀렸다
// for (let i = 0; i < t; i++) {
//   let count = [];
//   // 샌트로 환산한다
//   const coins = [25, 10, 5, 1];
//   for (let j = 0; j < coins.length; j++) {
//     // 필요한 동전의 개수 = 잔돈 / 코인;
//     count.push(Math.floor(input[i] / coins[j]));
//     // 나눈 값의 나머지로 다시 계산하는 순회
//     input[i] %= coins[j];
//   }
//   result += `${count.join(" ")}\n`;
// }

// console.log(result.slice(0, -1));

// 다른형태의 코드
input.forEach((money) => {
  changeConin(money);
});

function changeConin(money) {
  const coins = [25, 10, 5, 1];
  coins.forEach((coin) => {
    result += `${Math.floor(money / coin)} `;
    money = money % coin;
  });
  result += "\n";
}

console.log(result);
