function areThereDuplicates(...arg) {
  arg.sort((a, b) => String(a).charCodeAt() - String(b).charCodeAt());
  const result = arg.some((v, i) => v === arg[i + 1]);
  return result;
}

console.log(areThereDuplicates(1, 2, 1));
