/*
     Asynchronous - Functions Running  in Parallel with other functions is called Asynchronous
                    
     Synchronous  -  Synchronous code runs in sequence , meaning that each operatiom must wait  
                     for the previous one to complete 
*/

// function display() {
//   let h1 = document.getElementById("output");
//   h1.innerHTML = "HELLO, WORLD !";
// }
// display();

setTimeout(myFunction, 1000);

function myFunction() {
  let h1 = document.getElementById("output");
  h1.innerHTML = "I love You !!";
}

// setInterval(clock, 3000);
// function clock() {
//   let d = new Date();
//   // let div = document.getElementById("time");
//   // console.log(div);
//   //div.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

//   let div = document.getElementById("time");
//   console.log(div);
//   div.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// }

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  let div = document.getElementById("time");
  //console.log(div);
  div.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

let promise = new promise(function (resolve, error) {
  resolve("done...!");
});
promise.then(
  function (resolve) {
    alert(resolve);
  },
  function (error) {
    alert(error);
  }
);
