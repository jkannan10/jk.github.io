/*
JSON stands for JavaScript Object Notation
JSON is a lightweight data-interchange format
JSON is plain text written in JavaScript object notation
JSON is used to send data between computers
JSON is language independent *
*/

const myObj = {
  name: "jk",
  age: 19,
  lang: ["java", "c", "html5", "css", "javascript", "oracle sql"],
};

const sendJSON = JSON.stringify(myObj);
console.log(myObj);
console.log("\n\n");
console.log(sendJSON);
console.log(typeof sendJSON); //it shows String eventhough it has .json extension it is actually a text file in string format

const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON);
