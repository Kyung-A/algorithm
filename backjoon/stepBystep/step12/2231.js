const n = require("fs").readFileSync("/dev/stdin").toString().trim();

// 0부터 n까지 반복문을 돌리면서 각 자릿수의 합 + 후보값 더해서 n과 같은 값인걸 찾는다
let result = 0;
for (let i = 0; i < n; i++) {
  let sum = 0;
  let value = i;
  let valueStr = value.toString();

  for (let j = 0; j < valueStr.length; j++) {
    sum += Number(valueStr[j]);
  }
  sum += value;

  if (sum === Number(n)) {
    result = value;
    break;
  }
}

console.log(result);
