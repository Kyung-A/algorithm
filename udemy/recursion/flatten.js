// 나의 풀이
function flatten(arr) {
  let result = [];

  function hepler(nums) {
    for (let num of nums) {
      if (!Array.isArray(num)) {
        result.push(num);
      } else {
        hepler([...num]);
      }
    }
  }

  hepler(arr);
  return result;
}

// 강사 풀이
function flatten(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }

  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]]));
