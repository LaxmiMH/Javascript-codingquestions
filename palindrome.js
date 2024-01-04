function isPalindrome(str) {
  let newStr = str.replace(/[^0-9A-Za-z]/g, "");
  console.log(newStr);
  return (
    str.split("").reverse().join("") === newStr.split("").reverse().join("")
  );
}

console.log(isPalindrome("m@ad@^^^am"));
