function fibonacci(num) {
  if (num <= 2) return 1;

  // 4 + 3 = 7

  // 3 + 2 (1) = 4
  // 2 (1) + 1 (1) = 2
  // 1 + 1 = 2
  // 0 + 1 = 1
  // 0 + 0 = 1

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibo(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b; // 2 = 1 + 1, 3 = 1 + 2, 5 = 2 + 3 ...
    a = b; // a = 1, a = 2, a = 3 ...
    b = c; // b = 2, b = 3, b = 5 ...
  }
  return b;
}

// console.log(fibo(4));
console.log(fibonacci(5));
