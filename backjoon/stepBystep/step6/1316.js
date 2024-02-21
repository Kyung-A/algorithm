const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let count = 0;

// 문자가 연속되지 않고 모두 최초로 등장한 문자일 경우 => 그룹 단어
// 문자에 중복이 있는데 모두 현재 문자와 전 문자와 일치하다면? -> 그룹 단어
// 이미 사용된 문자가 또 등장했는데 바로 전 문자과 다르다면? => 그룹 단어 X
// 고로 중복된 문자가 등장했을때 이전 문자와 일치하는지 아닌지에 대한 문제
for (let i = 1; i <= n; i++) {
  const word = input[i];
  const used = [];
  let flag = true;

  for (let j = 0; j < word.length; j++) {
    const char = word[j];
    if (!used.includes(char)) {
      // 사용된 문자가 아니라면
      used.push(char);
    } else if (char !== word[j - 1]) {
      // 이미 사용된 문자가 또 등장
      // 그러나 직전 문자와 일치하지 않다면?
      flag = false; // 그룹 단어 X
      break; // 더이상의 검사 종료
    }
  }

  // 그룹 단어인 경우
  if (flag) count++;
}

console.log(count);
