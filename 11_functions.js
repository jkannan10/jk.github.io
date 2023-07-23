function add(a, b) {
  if (a == undefined || b == undefined) {
    return void 0;
  }
  console.log(a, b);
  return a + b;
}

let a = 10;
let b = 20;

console.log(add(a, b));
console.log(add(a));
//Anonymous function
const c = function (a, b) {
  return a * b;
};
console.log(c(a, b));
/*
   while declaring anonymous function that must be
   stored in const type variable

   wkt, the value assigned to const varaiable can't be changed
   similarly, once the function is defined it can't be changed 

   we can also use let and var

   It is a common practice to declare const function expressions
   in the const keyword.
   */
