const isOdd = (val) => val % 2 !== 0;

// 나의 풀이
function someRecursive(arr, cb) {
  let idx = 0;

  function helper() {
    if (idx === arr.length) return;
    let num = arr[idx];
    cb(num);
    helper(idx++);
  }

  helper(idx);
}

// 강사 풀이
// true인 값이 있으면 true을 return
// true이 아예 없이 끝까지 false이면 false return
function someRecursive(arr, cb) {
  if (arr.length === 0) return false;
  if (cb(arr[0])) return true;
  return someRecursive(arr.slice(1), cb);
}

console.log(someRecursive([1, 2, 3, 4], isOdd));
