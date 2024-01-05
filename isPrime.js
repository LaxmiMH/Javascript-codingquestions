function isPrime1(n) {
  if (n === 0 || n === 1) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(isPrime1(5));
