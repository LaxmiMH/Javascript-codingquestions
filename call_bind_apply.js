var firstName = "Jerry";
function getName(lastName) {
  return this.firstName + " " + lastName;
}
let person = {
  firstName: "Tom",
};
console.log(getName.call(this, "G N"));
console.log(getName.call(person, "K"));

//apply
console.log(getName.apply(this, ["G N"]));
console.log(getName.apply(person, ["K"]));
//bind
let fullName = getName.bind(person, "H");
console.log(fullName());
