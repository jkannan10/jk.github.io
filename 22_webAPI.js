/*
 API - https://aws.amazon.com/what-is/api/
     - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction  
 */

const myObj = {
  name: "jk",
  content: ["Earn", "Grow", "Give"],
};

window.sessionStorage.setItem("sessionStore", JSON.stringify(myObj));

const getStorage = window.sessionStorage.getItem("sessionStore");
console.log(getStorage);

window.localStorage.setItem("sessionStore", JSON.stringify(myObj));
const getLocalStorage = window.sessionStorage.getItem("sessionStore");
console.log(getLocalStorage);
let parsedFile = JSON.parse(getStorage);
console.log(parsedFile);

localStorage.clear();
sessionStorage.clear();
