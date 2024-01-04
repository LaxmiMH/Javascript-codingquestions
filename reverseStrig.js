let str = "laxmi";
let res = "";
for (let i = str.length - 1; i >= 0; i--) {
  res += str[i];
}
console.log(res);
console.log(str.split("").reverse().join(""));

let str1 = "India is my country";
function reverseString(str1) {
  let newStr = str1.split(" ");
  let output = [];
  for (let i = 0; i < newStr.length; i++) {
    output.push(newStr[i].split("").reverse().join(""));
  }
  return output.join(" ");
}
console.log(reverseString(str1));

let vowelString = "ajki dsfsdfs oireuteowpieqwn ewirouewpri";
let arr = ["a", "e", "i", "o", "u"];
function checkVowel() {
  // let output = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (vowelString.includes(arr[i])) {
  //     output.push(arr[i]);
  //   }
  // }
  let output = arr.filter((vowel) => vowelString.includes(vowel));
  console.log(output);
  console.log(output);
}
checkVowel();
