const h2 = document.getElementById("h2");
const span = h2.querySelector("#span");
const div = document.getElementById("main");
const button = div.querySelector("#btn");
let bcg = "";
const colors = [
  "red",
  "green",
  "yellow",
  "yellowgreen",
  "aqua",
  "violet",
  "bisque",
  "chocolate",
  "teal",
  "darkgrey",
];
function rand() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", (event) => {
  div.style.backgroundColor = colors[rand()];
  bcg = div.style.backgroundColor;
  span.textContent = bcg;
});

console.log("jk");
