/*

 object is one of the data type in JS
 objects are mutable
 Objects have property and eack property hava a key and value
 when we assign a object to another object we only assign refernce . i.e value can be changed if we change in 
 any one of the object
 objects have OOPS behaviour
 */

// Simple Object
const person = {
  firstName: "Monkey",
  middleName: " D. ",
  lastName: "luffy",
  age: 18,
  pirate: true,
};
//Access Types
console.log(person.firstName + " " + person.middleName + " " + person.lastName);
console.log(person["age"] + " " + person["pirate"]);

//Property of an object hold an object

const PersonalDetails = {
  name: "jk",
  age: 19,
  phonrNo: 7358249279,
  address: {
    doorNo: 29,
    street: "smps",
    city: "Aruppukottai",
  },
};

console.log(PersonalDetails.name);
console.log(PersonalDetails.address.city);

//Object with a function
const details = {
  fun: () => {
    return PersonalDetails.name;
  },
};
console.log(details.fun());

//Object with array

const account = {
  noOfPersons: 2,
  holderNames: ["Portgas D. Ace", "Trafalgar D. law"],
};

console.log(account.holderNames[0]);

//inheritance
const engine = {
  horsePower: 1250,
};
let AudiR8 = Object.create(engine);
console.log(AudiR8); //object is empty
console.log(AudiR8.horsePower);

(AudiR8.brand = "Audi"),
  (AudiR8.price = "50,00,000 USD"),
  console.log(AudiR8.price, AudiR8); //Now Audi having own and inherited property

//polymorphism

const body = {
  color: "green",
  volume: () => {
    return 30 * 20;
  },
};
console.log(body.volume());
const bmw = Object.create(body);
bmw.volume = () => {
  return 7 * 25;
}; //Method Overrided

console.log(bmw.volume());

//destructuring
const { color: col } = body;
console.log(col);
const { color } = body;
console.log(color);

//Iterating
for (let p in person) {
  console.log(person[p]);
}
