/*
Syntax errors: These occur when the code is not written according to the syntax rules of JavaScript. For example, missing a closing parenthesis or semicolon.

Reference errors: These occur when you try to use a variable or function that has not been declared or is out of scope.

Type errors: These occur when you try to use a value of the wrong type, such as calling a method on a null or undefined value.

Evaluation errors: These occur when an error occurs during the evaluation of a JavaScript expression.

Range errors: These occur when you try to use a value that is outside the range of acceptable values, such as passing a negative value to the Math.sqrt() function.

URI errors: These occur when you try to encode or decode a URI component using incorrect syntax.

Internal errors: These occur when an internal error in the JavaScript engine is encountered, such as a stack overflow or out-of-memory error.
*/

/*
  > try
  > catch
  > throw
  > finally
*/
"use strict";
let val = -1;
try {
  value = 1;
} catch (err) {
  console.log("Error Occured");
}
console.warn(12);
