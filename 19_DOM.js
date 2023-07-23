const view1 = document.getElementById("view1");
console.log(view1);
view1.style.backgroundColor = "red";

const view2 = document.querySelector("#view2");
console.log(view2);
view2.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view"); //returns array of objects
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.width = "150px";
  evenDivs[i].style.backgroundColor = "yellowgreen";
}

const navText = document.querySelector("nav h1");
navText.textContent = "JK";

const navBar = document.querySelector("nav");
navBar.innerHTML = "<h1>Uchiha</h1> <h2>Obito</h2>";
navBar.style.color = "aliceblue";

function demoOnClick() {
  document.getElementById("but").textContent = Date();
}

function upperCase() {
  const val = document.getElementById("name");
  val.value = val.value.toUpperCase();
}

function mouseOver() {
  document.getElementById("div1").innerHTML = "MouseOver";
}

function mouseOut(obj) {
  document.getElementById("div1").innerHTML = "MouseOut";
}

function mouseDown() {
  //when mouse is clicked it is triggered
  document.getElementById("div2").innerHTML = "Arigato gozeimasu";
}

function mouseUp() {
  document.getElementById("div2").innerHTML = " click here";
}
x;
