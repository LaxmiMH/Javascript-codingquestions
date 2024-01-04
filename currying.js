function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(1)(5));

const sum1 = function (a) {
  return function (b) {
    if (b) {
      return sum1(a + b);
    }
    return a;
  };
};
console.log(sum1(1)(2)(3)(4)());
console.log(sum1(2)(3)(4)(6)());

function findSum1(x) {
  let sum = x;

  function innerAdd(y) {
    sum += y;
    return innerAdd;
  }

  innerAdd.valueOf = function () {
    return sum;
  };

  return innerAdd;
}

const result = findSum1(2)(3)(4)(7);
console.log(result.valueOf()); // Output: 22
