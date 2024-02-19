const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);

for (let i = 1; i < n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(i + (i - 1)));
}
for (let i = n; i > 0; i--) {
  console.log(" ".repeat(n - i) + "*".repeat(i + (i - 1)));
}
