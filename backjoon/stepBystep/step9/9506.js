const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  let n = input[i];
  let arr = [];
  let total = 0;

  for (let j = 1; j <= n; j++) {
    if (n % j === 0) {
      if (n !== j) {
        arr.push(j);
        total += j;
      }
    }
  }

  if (total === n) {
    console.log(`${n} = ${arr.join(" + ")}`);
  } else {
    console.log(`${n} is NOT perfect.`);
  }
}
