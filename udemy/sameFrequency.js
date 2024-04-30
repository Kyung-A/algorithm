function sameFrequency(num1, num2) {
  const numArr1 = Array.from(String(num1), Number);
  const numArr2 = Array.from(String(num2), Number);
  const map = new Map();

  if (numArr1.length !== numArr2.length) return false;

  for (let i = 0; i < numArr1.length; i++) {
    if (map.has(numArr1[i])) {
      map.set(numArr1[i], map.get(numArr1[i]) + 1);
    } else {
      map.set(numArr1[i], 1);
    }
  }

  for (let i = 0; i < numArr2.length; i++) {
    if (map.has(numArr2[i])) {
      map.set(numArr2[i], map.get(numArr2[i]) - 1);
      if (map.get(numArr2[i]) === -1) return false;
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(34, 14));
