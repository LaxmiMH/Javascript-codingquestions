function twoSum(arr, target) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    console.log(obj[complement]);
    if (obj[complement] !== undefined) {
      return [obj[complement], i];
    } else {
      console.log(obj[complement]);
      obj[arr[i]] = i;
    }
  }
  console.log(obj);
}
//[7,2,3,5], target = 9; [0,1]
console.log(twoSum([1, 7, 2, 5], 9));

function Sum2(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(arr[i], i);
    }
  }
}
console.log(Sum2([1, 7, 2, 5], 9));
