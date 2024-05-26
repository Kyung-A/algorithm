// 나의 풀이
function capitalizeWords(strArr) {
  let newArr = [];

  function hepler(arr) {
    if (arr.length <= 0) return newArr;
    newArr.push(arr[0].toUpperCase());
    hepler(arr.slice(1));
  }

  hepler(strArr);
  return newArr;
}

// 강사 풀이
function capitalizeWords(arr) {
  if (arr.length === 1) return [arr[0].toUpperCase()];
  let res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());

  return res;
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));
