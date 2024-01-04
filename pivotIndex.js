function pivotIndex(arr) {
  let totalIndex = 0;
  let leftIndex = 0;

  arr.forEach((element) => {
    totalIndex += element;
  });
  for (let i = 0; i < arr.length; i++) {
    if (totalIndex - leftIndex - arr[i] === leftIndex) {
      return i;
    }
    leftIndex += arr[i];
  }
  return -1;
}
console.log(pivotIndex([5, 4, 9, 6, 3]));
