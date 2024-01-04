// function flatObj(obj) {
//   let out = {};
//   function flatObj1(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] === "object") {
//         flatObj1(obj[key]);
//       } else {
//         out[key] = obj[key];
//       }
//     }
//   }
//   flatObj1(obj);
//   return out;
// }

// console.log(
//   flatObj({
//     name: "laxmi",
//     age: 12,
//     address: {
//       ward: 19,
//       area: {
//         kdbkd: "anknk",
//         kjshg: "dbdkjbkgjnlkdfhk",
//       },
//     },
//   })
// );

// currying
function findSum1(x) {
  const innerFunction = function (y) {
    if (y === undefined) {
      return x;
    } else {
      return findSum1(x + y);
    }
  };

  innerFunction.valueOf = function () {
    return x;
  };

  return innerFunction;
}

const result1 = findSum1(2)(3)(4)(6)(4);
console.log(result1.valueOf()); // Output: 22
