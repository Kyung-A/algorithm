// 나의풀이
// 통과하지 못했는데 반례를 못 찾겠음
function isSubsequence(str1, str2) {
  let index = 0;

  for (const str of str1) {
    if (str2.includes(str)) {
      const sameIndex = str2.indexOf(str);

      if (index > sameIndex) {
        return false;
      }
      index = sameIndex;
    }
  }

  return true;
}

// 강사 풀이
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sting", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "aacb"));
