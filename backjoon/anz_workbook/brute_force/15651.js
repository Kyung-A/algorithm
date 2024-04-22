var [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 뽑았던 번호를 또 뽑아도 된다
let result = "";

const dfs = () => {
  const arr = [];

  const recursion = () => {
    if (arr.length === m) {
      result += `${arr.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < n; i++) {
      arr.push(i + 1);
      recursion();
      arr.pop(); // 마지막을 지우고 다시 할당
    }
  };
  recursion();
  console.log(result); // 시간초과 해결
};

dfs();
