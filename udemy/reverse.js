// 나의 풀이
function reverse(str) {
  let result = "";
  let i = str.length - 1;

  function helper() {
    if (i < 0) return;
    result += str[i];
    helper(i--);
  }

  helper(i);
  return result;
}

// 강사 풀이
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("rithmschool"));
