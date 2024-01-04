//remove duplicate

function removeDuplicates(arr) {
  let ouput = arr.filter((a, index) => arr.indexOf(a) === index);
  console.log(ouput);
}
let arr = [2, 3, 2, 5, 6, 5];
removeDuplicates(arr);

function remove2(arr) {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    if (!out.includes(arr[i])) {
      out.push(arr[i]);
    }
  }

  console.log(out);
}
remove2(arr);
