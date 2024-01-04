function changeMap(arr) {
  let output = [];
  function squareElement(a) {
    return a * a;
  }
  for (let i = 0; i < arr.length; i++) {
    output.push(squareElement(arr[i]));
  }
  console.log(output);
}
console.log([2, 8].map((a) => a * a));
console.log(changeMap([2, 8, 4, 6]));
