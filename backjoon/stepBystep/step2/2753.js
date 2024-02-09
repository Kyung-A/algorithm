var input = require("fs").readFileSync("/dev/stdin").toString().trim();
let year = Number(input);

// 1) 4의 배수이면서 100의 배수가 아닐때 => 윤년
// 2) 4의 배수이면서 400의 배수일때 => 윤년
// 3) 4의 배수이면서 100의 배수이고, 400의 배수가 아님 => 윤년 아님

// 오답노트
// 입력을 1900으로 했을때 결괏값이 없던 경우
// if (year % 4 === 0) {
//   if (year % 100 !== 0) {
//     console.log(1);
//   }
//   if (year % 400 === 0) {
//     console.log(1);
//   }
// 100의 배수인데 400의 배수가 아닐때 조건문이 빠짐
// } else {
//   console.log(0);
// }

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  // 1, 2번 해당
  console.log(1);
} else {
  // 3번 해당
  console.log(0);
}
