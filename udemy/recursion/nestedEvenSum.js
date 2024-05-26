var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

// 나의 풀이
function nestedEvenSum(obj) {
  let sum = 0;

  function hepler(oldObj) {
    for (let key in oldObj) {
      if (typeof oldObj[key] === "number" && oldObj[key] % 2 === 0)
        sum += oldObj[key];
      if (typeof oldObj[key] === "object") hepler(oldObj[key]);
    }
  }

  hepler(obj);
  return sum;
}

// 강사 풀이
function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
}

console.log(nestedEvenSum(obj1));
