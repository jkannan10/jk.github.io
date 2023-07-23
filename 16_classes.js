/*
class in JS was intro in 2015 ES6 edition
It is like blue print  or template
we can create objects using this
All Oops behaviour are applicable  -->abstraction -> Encapsulation -> through typescript, Inheritance , Polyomrphism
*/
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
  get getAge() {
    return this.age;
  }
  set setAge(age) {
    this.age = age;
  }
  details() {
    return this.age;
  }
}

let personObject = new person("Zoro", 23);
console.log(personObject.getAge);
personObject.setName = "Jimbei";
console.log(personObject.getName);

//inhertance
/*
 mutliple  inheritance is not possible in Js like JAVA -->  C extends a,b
 we can only extends one class
*/
class address extends person {
  constructor(name, age, doorNo, city) {
    super(name, age);
    this.doorNo = doorNo;
    this.city = city;
  }
  get getDoorNo() {
    return this.doorNo;
  }
  set setDoorNo(doorNo) {
    this.doorNo = doorNo;
  }
  get getCity() {
    return this.city;
  }
  set setCity(city) {
    this.city = city;
  }
}
let newObj = new address("Sanji", 20, 46, "All Blue");
console.log(newObj.getName, newObj.getCity, newObj.details());
