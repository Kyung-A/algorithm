const input =  require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const line = ["WBWBWBWB", "BWBWBWBW"];
const result = [];

// -8을 하는 이유는 8 * 8 외에 나머지 공간을 빼는것
for(let i = 0; i <= n - 8; i++) {
    for(let j = 0;  j <= m - 8; j++) {

        // z 반복문은 시작하는 경우가 W, B 두가지이기 때문 
        for(let z = 0; z < 2; z++) {
            let count = 0;

            for(let k = 0; k < 8; k++) {
                for(let l = 0; l < 8; l++) {
                  const cur = input[i + k][j + l]; // 글자
                  if(cur !== line[(k + z) % 2][l]) {
                    // 각 라인의 글자를 모두 비교 후 다음 케이스 비교로 넘어감
                    count++;
                  }
                }
            }
            result.push(count);
        }
    }
}

console.log(Math.min(...result))