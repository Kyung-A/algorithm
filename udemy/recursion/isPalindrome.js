// 나의 풀이
function isPalindrome(str) {
  let reverse = "";
  let i = str.length - 1;

  function helper() {
    if (i < 0) return;
    reverse += str[i];
    helper(i--);
  }

  helper(i);
  return str === reverse ? true : false;
}

// 강사 풀이
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome("tacocat"));
