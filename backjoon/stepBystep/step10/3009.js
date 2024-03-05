const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let x = new Map();
let y = new Map();
let result = "";

for (let i = 0; i < input.length; i++) {
  const arr = input[i].toString().trim().split(" ").map(Number);

  if (x.has(arr[0])) {
    x.set(arr[0], x.get(arr[0]) + 1);
  } else {
    x.set(arr[0], 1);
  }

  if (y.has(arr[1])) {
    y.set(arr[1], y.get(arr[1]) + 1);
  } else {
    y.set(arr[1], 1);
  }
}

for (let [key, value] of x) {
  if (value === 1) {
    result += key;
  }
}

for (let [key, value] of y) {
  if (value === 1) {
    result += ` ${key}`;
  }
}

console.log(result);

// XOR을 이용한 비트연산
// const [[x0, y0], [x1, y1], [x2, y2]] = fs
//   .readFileSync("example.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((str) => str.split(" "));

// 두개의 수가 같으면 0, 다르면 1을 반환
// console.log(`${x0 ^ x1 ^ x2} ${y0 ^ y1 ^ y2}`);
