const [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

if (a + b > c) {
  console.log(a + b + c);
} else {
  let d = 0;
  for (let i = a; i < c; i++) {
    if (a + b <= i) break;
    d = i;
  }
  console.log(a + b + d);
}

// 다른 풀이
if (a + b > c) {
  console.log(a + b + c);
} else {
  console.log(2 * (a + b) - 1);
}
