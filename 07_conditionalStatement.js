let id = {
  name: "jk",
  age: 10,
};
if (true) {
  console.log("Hi");
}
if (1) {
  console.log("Hi");
}
if (45) {
  console.log("Hi");
}
if ("hi") {
  console.log("Hi");
}
if (10.45) {
  console.log("Hi");
}
if (id) {
  console.log("hi");
}
if (false) {
  console.log("HI");
} else {
  console.log("BYE");
}
if (0) {
  console.log("HI");
} else {
  console.log("BYE");
}
if (null) {
  console.log("HI");
} else {
  console.log("BYE");
}
if (undefined) {
  console.log("HI");
} else {
  console.log("BYE");
}
if (NaN) {
  console.log("HI");
} else {
  console.log("BYE");
}
if (id && 0) {
  console.log("if");
} else if (id) {
  console.log("else if");
} else {
  console.log("else");
}

/*
  Every value is considered as TRUE except "  0 , null , undefined , false , NaN "
*/
