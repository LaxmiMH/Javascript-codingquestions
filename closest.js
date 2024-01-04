const needle = 8;

const closest = [1, 10, 7, 2, 4].reduce((a, b) => {
  return Math.abs(b - needle) < Math.abs(a - needle) ? b : a;
});

console.log(closest); // Output: 7
