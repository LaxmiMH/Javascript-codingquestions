function findVowels() {
  let ovels = ["a", "e", "i", "o", "u"];
  let input = "Hello, Check the all ovels from this sentense";

  let output = [];
  let count = 0;
  for (let i of input.toLowerCase()) {
    if (ovels.includes(i)) {
      output.push(i);
      count++;
    }
  }
  console.log(output, count);
}
findVowels();
