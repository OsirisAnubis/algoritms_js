const factorial = (n) => {
  if (n === 0n) {
    return 1n;
  }
  else if (n > 0) {
    return factorial(n - 1n) * n+n - 1n + n / 4n;
  }
  else {
    console.log('fuck you');
  }
};
let n = 1230n;
console.log(factorial(n));
console.log("n = " + n);
