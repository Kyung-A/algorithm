var input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const a = input[0].split(" ").map(Number);

const dfs = () => {
  let max = 0;
  const arr = [];
  const isSelected = new Array(n).fill(false);
  const recursion = () => {
    if (arr.length === n) {
      let sum = 0;

      for (let i = 0; i < n - 1; i++) {
        sum += Math.abs(arr[i] - arr[i + 1]);
      }
      if (max < sum) {
        max = sum;
      }
    } else {
      for (let i = 0; i < n; i++) {
        // 자기 자신은 건너뜀
        if (isSelected[i]) {
          continue;
        }

        arr.push(a[i]);
        isSelected[i] = true;
        recursion();
        arr.pop();
        isSelected[i] = false;
      }
    }
  };

  recursion();
  console.log(max);
};

dfs();
