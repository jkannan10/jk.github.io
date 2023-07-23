/*
 Data Types

 Primary Data Type

 1)Number
 2)Boolean
 3)String
 4)Undefined
 5)null
 6)symbol ->ES6 ->2015

 Complex Data Type

 1)object
 */

/*
    DATATYPE INDETIFICATION

JS is a Dynamically Typed language
It's is like phython, that is the compiler have the intelligence to indentify what kind of  data type  is present in the varaiable 

so there is no static data type in JS like in JAVA or C or C++
We can use static DT in JS by using TypeScript
*/

/*
 UNIDENTIFIED

  unidentified  is one of the datatype in javascript 
  A varaiable is consider to be unidetified datatype when there is no value assigned to them
*/

/*
  NULL
   null -  Unlike in other languages JS null is one of the primative datatype
           In JAVA, null is a reserved keyword and it is used when a object refernce does not point 
           to any object 
           This property is same in JS whwn a object doesn't poin to anything it is null
           Js defines null == undefined
  */
/*
   SYMBOL
     symbol - symbol is one of the data type in JS
              It's intro in ES6 in 2015
              It create unique value every time its called -->Symbol()
*/
/*
  OBJECT
        In JavaScript, an object is a collection of properties,
        where each property is defined as a key-value pair.
        let person = {
                       firstName: 'John',
                       lastName: 'Doe'
                      };
*/

// 1) NUMBER

let a = 10;
console.log(a + " " + typeof a);
a = 14.56;
console.log(a + " " + typeof a);
console.log("\n\n");

// 2)boolean

let b = true;
console.log(b + " " + typeof b);
b = false;
console.log(b + " " + typeof b);
console.log("\n\n");

// 3)String

let c = "Hello,World!";
console.log(c + " " + typeof c);
c = c + "  " + a.toString();
console.log(c + " " + typeof c + " " + typeof a);
console.log("\n\n");

// 4)undefined

let d;
console.log(d + " " + typeof d);
console.log("\n\n");

// 5)null
let e = null;
console.log(e + " " + typeof e);
console.log(null == undefined);
console.log(null === undefined);
console.log("\n\n");

//6)Symbol()

let f = Symbol("foot");
console.log(f);
console.log(Symbol("foot") == f);
console.log("\n\n");

// 7)Object

let identity = {
  name: "joe",
  age: "18",
  dept: "IT",
};
let x = "dept";
console.log(identity.name + "  " + identity["age"] + "  " + identity[x]);
