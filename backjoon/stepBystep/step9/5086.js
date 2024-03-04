const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 나의 풀이
for (let i = 0; i < input.length - 1; i++) {
  const numArr = input[i].toString().trim().split(" ").map(Number);
  let flag = false;

  if (numArr[0] > numArr[1]) {
    if (numArr[0] % numArr[1] === 0) {
      console.log("multiple");
    } else {
      flag = true;
    }
  } else {
    if (numArr[1] % numArr[0] === 0) {
      console.log("factor");
    } else {
      flag = true;
    }
  }

  if (flag) console.log("neither");
}

// 다른 정답
for (let i = 0; i < input.length - 1; i++) {
  const numArr = input[i].toString().trim().split(" ").map(Number);

  if (numArr[0] % numArr[1] === 0) {
    console.log("multiple");
  } else if (numArr[1] % numArr[0] === 0) {
    console.log("factor");
  } else {
    console.log("neither");
  }
}
