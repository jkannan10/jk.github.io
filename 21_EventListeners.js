/*
 addEventListner(event , function , useCapture)
 removeEventListsner(event , function , useCapture)
 useCapture default ---> false
 */
const view = document.getElementById("view1");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

const fun = () => {
  alert("Click event occured");
};

h2.addEventListener("click", fun, false);
h2.removeEventListener("click", fun, false);

h2.addEventListener("click", (event) => {
  event.target.textContent = "Clicked";
});

/*
 readystate - https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
 readystatechange - https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event
 */

document.addEventListener(
  "readystatechange",
  (event) => {
    if (event.target.readyState === "complete") {
      console.log("Documentation was successfully loaded in browser");
      inItApp();
    }
  },
  false
);

const inItApp = () => {
  view.addEventListener("click", (subEvent) => {
    // subEvent.target.style.backgroundColor = "green";
    view.classList.toggle("purple");
    view.classList.toggle("darkblue");
  });
  div.addEventListener("click", (subEvent) => {
    div.style.backgroundColor = "yellowgreen";
  });
  h2.addEventListener("click", (subEvent) => {
    subEvent.stopPropagation();
    const myText = subEvent.target.textContent;
  });
};
