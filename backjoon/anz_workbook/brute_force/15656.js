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

  const recursion = () => {
    if (arr2.length === m) {
      result += `${arr2.join(" ")}\n`;
      return;
    }

    for (let i = 0; i < n; i++) {
      arr2.push(arr[i]);
      recursion(i);
      arr2.pop();
    }
  };
  recursion();
  console.log(result);
};

dfs();
