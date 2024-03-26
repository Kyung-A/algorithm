const [a, b, c, d, e, f] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

// 가감법
// x값 = 첫번째 식에 각각 e를 곱함, 두번째 식에 각각 b를 곱함
// y값 = 첫번째 식에 각각 d를 곱함, 두번째 식에 각각 a를 곱함 
console.log(`${(c * e - b * f) / (a * e - b * d)} ${(c * d - a * f) / (b * d - a * e)}`) // x, y

// 완전탐색
for(let i = -999; i <= 999; i++) {
    for(let j = -999; j <= 999; j++) {
        if(a * i + b * j === c && d * i + e * j === f) {
            console.log(i, j)
        }
    }
}
