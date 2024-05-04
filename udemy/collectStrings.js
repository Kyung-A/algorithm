const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  let newObj = [];

  function hepler(oldObj) {
    for (let key in oldObj) {
      if (typeof oldObj[key] === "string") newObj.push(oldObj[key]);
      if (typeof oldObj[key] === "object") hepler(oldObj[key]);
    }
  }

  hepler(obj);
  return newObj;
}

// 강사 풀이 (순수 재귀 사용)
function collectStrings(obj) {
  let strArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      strArr = strArr.concat(collectStrings(obj[key]));
    }
  }

  return strArr;
}

console.log(collectStrings(obj));
