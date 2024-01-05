function findMin(arr) {
  let minValue = arr.reduce((a, c) => (a < c ? a : c));
  return minValue;
}
console.log(findMin([2, 3, 4, 0, 2, -2, 1]));

function findMax(arr) {
  let maxValue = arr.reduce((a, c) => (a > c ? a : c));
  return maxValue;
}
console.log(findMax([1, 2, 10000, 50, 600, 71211133]));
