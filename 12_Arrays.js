// 1)Array Creation
// Method 1

const b = ["hi", "hello", ",world!"];
console.log(b);
console.log("\n\n");

// Method 2

const a = [];
a[0] = "hi";
a[1] = "hello";
a[2] = ",world!";
a[6] = "empty spaces before";
console.log(typeof a[4]);
console.log(a);
console.log("\n\n");

//Method 3

const c = new Array("hi", "hello", ",world!");
const d = new Array(5);
d[8] = "hi";
console.log(c, d.length, d[8]);

//Array of element 7
const e = [7];
//Array of size 7
const f = new Array(7);

/*
  Arrays are not static in JS

  while inserting text or boolean or objects inside the 
  array it's considered it as value

   Meanwhile ,when we give single number (not floating point)
   it's considered it as size of the array 
   It's like new int[size] in JAVA

  when we access the elemnt beyond array size it shows undefined
  likewise, when we insert the element beyond it's size for example
  size = 5 and we insert a[8] = "Kaizoku" then the remaining spaces are 
  left holes -->undefined;
  */
