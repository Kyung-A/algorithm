// 나의 풀이
// 실패
// function findLongestSubstring(str) {
//   let str2 = "";
//   let start = 0;
//   let end = 0;
//   let result = [];

//   while (start < str.length) {
//     if (!str2.includes(str[end]) && end < str.length) {
//       str2 += str[end];
//       end++;
//     } else if (str2.includes(str[end])) {
//       result.push(str2.length);
//       start++;
//       end = start;
//       str2 = "";
//     } else {
//       break;
//     }
//   }

//   return Math.max(...result) === -Infinity ? 0 : Math.max(...result);
// }

// 강사 풀이
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }

  return longest;
}

console.log(findLongestSubstring("longestsubstring"));
