// 빈도수 세기 패턴
const fs = require("fs");
const [str1, str2] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");

// 나의 풀이
// 유데미 IDE에서는 계속 Expected true to be false. 라는 에러를 뱉으면서 통과가 안되었다 => 이유를 모르겠음 다 맞는디... => 그냥 정답으로 등록한 코드랑 하나만 틀려도 통과가 안되는듯
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  str1.toLowerCase();
  str2.toLowerCase();

  for (const str of str1) {
    let i = str2.indexOf(str);
    if (i === -1) return false;
    str2.replace(str, "");
  }
  return true;
}

console.log(validAnagram(str1, str2));

// 강사 풀이
function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) return false; // 숫자 0은 거짓
    lookup[letter] -= 1;
  }

  return true;
}

console.log(validAnagram(str1, str2));
