const array = [23, 456, 123, 454];
const string = ["apple", "banana", "orange", "hi"];
console.log(array);

console.log(array.length);
console.log(array.push(21), array); // Add at last
console.log(array.pop(), array); //Remove at last
console.log(array.unshift(21), array); // Add at first
console.log(array.shift(), array); //Remove At first

//All add and remove methods return size of the array after performing their operation

console.log(array.toString());
/*
 sort() method in Js genarally designed to sort th strings

 So,we can't normally apply sort on Number to perform sort opeartion on 
 numbers we need to write a comaprator inside the sort function
 */
console.log(string.sort());
console.log(string.reverse());

console.log(
  array.sort(function (a, b) {
    return a - b;
  })
);
console.log(
  array.sort(function (a, b) {
    return b - a;
  })
);

/*
 splice
    this is used to delete elemnts fro array 
    and return a array with deleted elemnt 
     splice(starting index of array,no of elements need to delete,add elements in specified index i.e inde in first argument)
*/
console.log(array);
let newArray = array.splice(1, 2, 9, 6, 6, 9); // frm 3 to last arg are new elements to old array
console.log(array, newArray);

/*
 foreach() 
  it is method which accepts upto 3 arguments

  By defining a function, we can perform specific opertion 
  during each iteration 

  It iterartes elements internally

  arg1 -> gets value
  arg2 -> gets index
  agr3 -> gets the entire array
*/

array.forEach(myFunctions);
function myFunctions(value, index, array) {
  console.log(value * 10); //operaion
  console.log(value + " " + index + "  " + array);
}

/*
   map() , filter() , reduce() , every() , some()
   These methods having similar functionalities like methods in Streams in JAVA 8
*/

/*
indexOf - return indexof specified element
        - not present return -1
lastindexOf - erturn last index of specified element
*/
console.log(array.indexOf(1));

/*
 find() - return the value of element which first pass the test simply which element first pass the predicate fn
 findIndex() -  return the index of element which first pass the test simply which element first pass the predicate fn
*/
console.log(array, array.find(myFunction));
console.log(array, array.findIndex(myFunction));

function myFunction(value) {
  return value > 18;
}
