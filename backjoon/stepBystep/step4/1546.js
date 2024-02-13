const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const subjectNum = Number(input[0]);
const score = input[1].toString().trim().split(" ").map(Number);
const maxScore = Math.max(...score);

let total = 0;
for (let i = 0; i < subjectNum; i++) {
  score[i] = (score[i] / maxScore) * 100;
  total += score[i];
}

console.log(total / subjectNum);
