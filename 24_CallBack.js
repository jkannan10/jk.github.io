/*
CallBack - Call backs are function passed as argument to another function.
           It's allow function to call another fn
           Sometimes you would like to have better control over when to execute a function.
           Suppose you want to do a calculation, and then display the result.
           You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:
*/
let arr = [10, 20, -293, -9, 38, -237, 30];
//Sort positive elements from array
let resultArray = positive(arr, (x) => x >= 0);
console.log(resultArray);
function positive(numbers, myCallBack) {
  let ans = [];
  for (const i of numbers) {
    if (myCallBack(i)) ans.push(i);
  }
  return ans;
}

/*
 resultArray = [10,20,38,30]
 we mostly use anonymous functions as callback functions
 from positive function we call anonymous function which is passed as argument 
 */

/*
Pyramid of  Doom  (or) Callback hell -->  Whem there is multiple callback in a function i.e nested callbacks it is 
                                          hard to debug it.
                                          It is called pyramid of Doom or CallBack Hell
*/

let val = 0;
function add1(val, callback1) {
  val += 1;
  callback1(val);
}
function add2(val, callback1) {
  val += 2;
  callback1(val);
}
function add3(val, callback1) {
  val += 3;
  callback1(val);
}

function doAdd() {
  add1(0, (result) => {
    add2(result, (result) => {
      add3(result, (result) => {
        console.log("Pyramid of Doom:  " + result);
      });
    });
  });
}

doAdd();
