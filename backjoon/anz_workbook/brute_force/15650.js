var [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// [1, 2]와 [2, 1]은 같은 수열로 봄
const dfs = () => {
  const arr = [];
  const isSelected = new Array(m).fill(false);

  const recursion = (start) => {
    if (arr.length === m) {
      console.log(arr.join(" "));
      return;
    }

    for (let i = start; i < n; i++) {
      // 자기 자신은 건너뜀
      if (isSelected[i]) {
        continue;
      }

      arr.push(i + 1);
      isSelected[i] = true;

      recursion(i);

      arr.pop();
      isSelected[i] = false;
    }
  };
  recursion(0);
};

dfs();
