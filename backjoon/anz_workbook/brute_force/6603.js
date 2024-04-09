var input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((el) => +el));

for (let i = 0; i < input.length - 1; i++) {
  const k = input[i].shift();
  const s = input[i];

  for (let j = 0; j < k; j++) {
    for (let a = j + 1; a < k; a++) {
      for (let b = a + 1; b < k; b++) {
        for (let c = b + 1; c < k; c++) {
          for (let d = c + 1; d < k; d++) {
            for (let e = d + 1; e < k; e++) {
              console.log(s[j], s[a], s[b], s[c], s[d], s[e]);
            }
          }
        }
      }
    }
  }
  console.log(" ");
}
