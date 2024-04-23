var [[n, m], [...arr]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => +el));

arr.sort((a, b) => a - b);

let result = "";

const dfs = () => {
  const arr2 = [];
  const isSelected = new Array(n).fill(false);

  const recursion = () => {
    if (arr2.length === m) {
      result += `${arr2.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isSelected[i]) {
        continue;
      }

      arr2.push(arr[i]);
      isSelected[i] = true;
      recursion();
      arr2.pop();
      isSelected[i] = false;
    }
  };
  recursion();
  console.log(result);
};

dfs();
