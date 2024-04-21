var [[n, s], [...arr]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => +el));

const dfs = (n, s, arr) => {
  let result = 0;

  const recursion = (i, sum) => {
    if (i === n) return;
    sum += arr[i];
    if (sum === s) result++;

    recursion(i + 1, sum);
    recursion(i + 1, sum - arr[i]);
  };
  recursion(0, 0);
  console.log(result);
};

dfs(n, s, arr);
