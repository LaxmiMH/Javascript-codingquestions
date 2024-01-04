function findAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(findAnagram("dog", "god"));
//anagram
//god, dog
function sortString(str) {
  return str.split("").sort().join("");
}
function findAnagaramGroups(strings) {
  let obj = {};

  for (const a of strings) {
    let newStr = sortString(a);

    if (obj[newStr]) {
      obj[newStr].push(a);
    } else {
      obj[newStr] = [a];
    }
  }
  console.log(Object.values(obj));
}
function findAnagrams(strings) {
  const anagramGroups = {};

  for (const str of strings) {
    const sortedStr = sortString(str);
    if (anagramGroups[sortedStr]) {
      anagramGroups[sortedStr].push(str);
    } else {
      anagramGroups[sortedStr] = [str];
    }
  }
  console.log(anagramGroups);

  // Convert the object values (anagram groups) into an array and return the result
  return Object.values(anagramGroups);
}
console.log(findAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(findAnagaramGroups(["eat", "tea", "tan", "ate", "nat", "bat"]));
