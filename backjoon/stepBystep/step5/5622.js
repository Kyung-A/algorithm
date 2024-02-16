const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const num = {
  ABC: 2,
  DEF: 3,
  GHI: 4,
  JKL: 5,
  MNO: 6,
  PQRS: 7,
  TUV: 8,
  WXYZ: 9,
};

let result = 0;

[...input].forEach((str) => {
  Object.entries(num).forEach(([key, value]) => {
    if (key.includes(str)) {
      result += value + 1;
    }
  });
});

console.log(result);
