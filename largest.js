function findLargest(arr) {
  return arr.reduce((a, c) => (a > c ? a : c));
}
console.log(findLargest([1, 51, 1000]));

function findLargest1(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(findLargest1([1, 51, 100]));
