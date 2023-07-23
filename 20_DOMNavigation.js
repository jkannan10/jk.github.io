/*
WKT,DOM represents document in hierarchical format --> Tree format
so each and every element in a document is related to one another in some ways like parent , child and sibling
we can access the elements in HTML througn this relation
There are sevaral proerties are avaialable to do this
*/
const views = document.getElementById("view1");
console.log(views);
const evenDivs = views.querySelectorAll("div");

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement); //Can Access parent element

console.log(
  (evenDivs[0].parentElement.children[0].style.backgroundColor = "green")
); //can acces any children originally returns collection of all children ie. 12

console.log(evenDivs[0].parentElement.childNodes); //return all nodes of a given parent including text,element

console.log(evenDivs[0].parentElement.hasChildNodes());

console.log(evenDivs[0].parentElement.lastChild);

console.log(evenDivs[0].parentElement.lastElementChild);

console.log(evenDivs[0].parentElement.firstChild);

console.log(evenDivs[0].parentElement.firstElementChild);

console.log(evenDivs[0].parentElement.nextSibling);

console.log(evenDivs[0].nextElementSibling);

console.log(evenDivs[0].nextSibling.nextSibling);

console.log(evenDivs[0].previousSibling);

console.log(evenDivs[0].previousElementSibling);

/*
  This DOM NAVIGATION file also covers another important concept  --> DOM  Nodes
  DOM Nodes have some methods like create() , remove() ,appendchild() , replacechild() ,crsxcAWE\Q
*/
const view2 = document.getElementById("view2");
console.log(view2);
views.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.lastElementChild.remove();

for (let i = 0; i < 12; i++) {
  createDiv(view2, i + 1);
}
function createDiv(parent, item) {
  const div = document.createElement("div");
  div.textContent = item;
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = "black";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.margin = "12px";
  parent.appendChild(div);
}
