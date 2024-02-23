const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const gradeOfSubject = ["A", "B", "C", "D", "F"];
// const subjectScore = [4.0, 3.0, 2.0, 1.0, 0];
// let totalScore = 0;
// let result = 0;

// input.forEach((v) => {
//   const input = v.toString().trim().split(" ");
//   const MyGradeOfSubject = input[2];
//   const MySubjectScore = Number(input[1]);

//   if (MyGradeOfSubject === "P") return;

//   if (MyGradeOfSubject.includes("0")) {
//     const scoreIndex = gradeOfSubject.indexOf(
//       MyGradeOfSubject.replace("0", "")
//     );
//     result += MySubjectScore * subjectScore[scoreIndex];
//   } else {
//     if (MyGradeOfSubject === "F") {
//       result += MySubjectScore * 0;
//     } else {
//       const scoreIndex = gradeOfSubject.indexOf(
//         MyGradeOfSubject.replace("+", "")
//       );

//       result += MySubjectScore * (subjectScore[scoreIndex] + 0.5);
//     }
//   }
//   totalScore += MySubjectScore;
// });

// console.log(result / totalScore);

// 코드양을 줄인 공식
const table = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalScore = 0;
let scores = 0;

for (let x of input) {
  let [sub, score, grade] = x.split(" ");
  if (grade === "P") continue;
  totalScore += Number(score);
  score += Number(score) + table[grade];
}

console.log(scores / totalScore);
