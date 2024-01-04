function reverse() {
  let a = [1, 2, 3, 4, 5, 6];
  let b = [9, 10, 11, 12, 13, 14];

  //[14, 13, 12, 11, 10, 9]
  //[14, 26, 36, 44, 50, 54]

  //   let c = b.reverse();
  let output = [];
  for (let i = 0; i < a.length; i++) {
    output.push(a[i] * b[a.length - 1 - i]);
  }
  console.log(output);
}
reverse();
