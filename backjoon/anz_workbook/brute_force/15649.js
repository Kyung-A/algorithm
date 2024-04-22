var [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// [1, 2]와 [2, 1]은 다른 수열로 봄
const dfs = () => {
  const arr = [];
  const isSelected = new Array(m).fill(false);

  const recursion = () => {
    if (arr.length === m) {
      console.log(arr.join(" "));
      return;
    }

    for (let i = 0; i < n; i++) {
      // 자기 자신은 건너뜀
      if (isSelected[i]) {
        continue;
      }

      arr.push(i + 1);
      isSelected[i] = true;

      recursion();

      arr.pop();
      isSelected[i] = false;
    }
  };
  recursion();
};

dfs();
