function reverseWith1fixed(str) {
  let outPut = [];
  let strArray = str.split(" ");
  outPut.push(strArray[0]);
  for (let i = 1; i < strArray.length; i++) {
    outPut.push(strArray[i].split("").reverse().join(""));
  }
  return outPut.join(" ");
}
console.log(reverseWith1fixed("ksndvdsnkj is a nice girl"));
