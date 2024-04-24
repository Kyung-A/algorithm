var [[n, m], [...arr]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => +el));

arr.sort((a, b) => a - b);

let result = [];

const dfs = () => {
  const arr2 = [];
  const isSelected = new Array(n).fill(false);

  const recursion = () => {
    if (arr2.length === m) {
      result.push([...arr2]);
      return;
    }

    // let prev = 0;
    for (let i = 0; i < n; i++) {
      if (isSelected[i]) {
        continue;
      }

      // 또 다른 방법
      // prev란 변수를 추가해서 이전 값과 현재 값을 비교한다
      // if (isSelected[i] || prev === arr[i]) {
      //   continue;
      // }

      // prev = arr[i];
      arr2.push(arr[i]);
      isSelected[i] = true;

      recursion();

      arr2.pop();
      isSelected[i] = false;
    }
  };
  recursion();
  // 중복제거
  Array.from(new Set(result.map((v) => JSON.stringify(v))), (json) =>
    console.log(JSON.parse(json).join(" "))
  );
};

dfs();
