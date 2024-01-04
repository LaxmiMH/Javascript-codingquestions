let arr = [1, 2, [3, 5, [10, 15], 8]];
function flatArray(arr) {
  let out = [];
  function flatArray1(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatArray1(arr[i]);
      } else {
        out.push(arr[i]);
      }
    }
  }
  flatArray1(arr);

  return out;
}
console.log(flatArray(arr));
// console.log(...arr);
// console.log([].concat(...arr));

// function flatArray(arr) {
//   return arr.reduce((a, c) => {
//     if (Array.isArray(c)) {
//       return [...a, ...c];
//     } else {
//       return [...a, c];
//     }
//   }, []);
// }
// console.log(flatArray(arr));
