let result = [];
function half_asc_dec(arr) {
  arr.sort();
  for (let i = 0; i < parseInt(arr.length / 2); i++) {
    result.push(arr[i]);
  }
  for (let j = arr.length - 1; j >= parseInt(arr.length / 2); j--) {
    result.push(arr[j]);
  }
  console.log(result);
}
console.log(half_asc_dec([5, 2, 4, 7, 9, 3, 1, 6, 8]));
