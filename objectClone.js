const user = {
  name: "laxmi",
  age: 21,
};
console.log(user);
let newUser = JSON.parse(JSON.stringify(user));
console.log(newUser);
newUser.name = "suma";
console.log(newUser);
console.log(user);

//Object.assign
const user1 = {
  name: "shreeeam",
  age: 22,
};

console.log(user1);
let newUser1 = Object.assign({}, user1);
console.log(newUser1);
newUser1.name = "shreedevi";
console.log(newUser1);
console.log(user1);

//spread
const user2 = {
  name: "snds",
  age: 22,
};

console.log(user2);
let newUser2 = { ...user2 };
console.log(newUser2);
newUser2.name = "kjsbkjvn";
console.log(newUser2);
console.log(user2);
