// 나의 풀이
function capitalizeFirst(strArr) {
  let result = [];

  function helper(arr) {
    if (result.length === strArr.length) return;
    for (let i = 0; i < arr.length; i++) {
      let str = "";
      str = arr[i][0].toUpperCase();
      str += arr[i].slice(1);
      result.push(str);
    }

    helper(arr.slice(1));
  }

  helper(strArr);
  return result;
}

// 강사 풀이
function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }
  const res = capitalizeFirst(arr.slice(0, -1));
  const str =
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
    arr.slice(arr.length - 1)[0].substr(1);

  res.push(str);
  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
