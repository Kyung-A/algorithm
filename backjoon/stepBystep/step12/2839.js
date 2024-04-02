const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = Number(input);

// 그리디 풀이법
let result = 0;

while (n > 0) {
  // n이 5로 나눠 떨어지질때까지 반복
  if (n % 5 === 0) {
    result += n / 5;
    break;
  }

  // n이 더이상 5로 나눠지지 않는다면?
  // n값에 3을 뺀다 (=3으로 나눈다 라는 의미와 일맥상통)
  n -= 3;
  // 뺀 횟수 만큼 +1
  result += 1;

  // 3, 5로 나눴음에도 값이 남아있다면?
  if (n < 0) result = -1;
}

console.log(result);

// DP 풀이법
const dp = Array.from({ length: 5001 }, () => -1);

dp[3] = 1;
dp[5] = 1;

if (n <= 5) {
  console.log(dp[n]);
} else {
  for (let i = 6; i <= n; i++) {
    // 최소값
    let a = dp[i];
    let b = dp[i];

    // 현재 무게에서 5키로 추가 전 dp가 가능하다면 해당 값 할당
    if (dp[i - 5] !== -1) a = dp[i - 5];

    // 현재 무게에서 3키로 추가 전 dp가 가능하다면 해당 값 할당
    if (dp[i - 3] !== -1) b = dp[i - 3];

    // 3, 5 둘 다 가능하다면 둘 중 작은 값 선택
    if (a > 0 && b > 0) {
      dp[i] = Math.min(a + 1, b + 1);
    } else if (a > 0 && b < 0) {
      // 5만 가능 하다면 5키로 전 dp값에 1추가
      dp[i] = a + 1;
    } else if (a < 0 && b > 0) {
      // 3만 가능하다면 3키로 전 dp값에 1추가
      dp[i] = b + 1;
    } else {
      // 불가능
      dp[i] = -1;
    }
  }
  console.log(dp[n]);
}
