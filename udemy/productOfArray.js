function productOfArray(arr) {
  let result = 1;

  function helper(arr) {
    if (arr.length === 0) return;
    result *= arr[0];
    helper(arr.slice(1));
  }

  helper(arr);
  return result;
}

console.log(productOfArray([1, 2, 3, 10]));
