let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

// 나의 풀이
function stringifyNumbers(oldObj) {
  for (let key in oldObj) {
    if (typeof oldObj[key] === "number") oldObj[key] = String(oldObj[key]);
    if (typeof oldObj[key] === "object") stringifyNumbers(oldObj[key]);
  }

  return oldObj;
}

//강사 풀이
function stringifyNumbers(obj) {
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

console.log(stringifyNumbers(obj));
