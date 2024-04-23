var [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 뽑았던 번호를 또 뽑아도 됨 / start가 달라짐
let result = "";

const dfs = () => {
  const arr = [];

  const recursion = (start) => {
    if (arr.length === m) {
      result += `${arr.join(" ")}\n`;
      return;
    }

    for (let i = start; i < n; i++) {
      arr.push(i + 1);
      recursion(i);
      arr.pop(); // 마지막을 지우고 다시 할당
    }
  };
  recursion(0);
  console.log(result);
};

dfs();
