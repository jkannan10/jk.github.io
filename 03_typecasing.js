// number to String
let x = 10;
console.log(x + "  " + typeof x);
x = x.toString();
x = String(x);
console.log(x + "  " + typeof x);
console.log("\n\n");

let y = 10.45;
console.log(y + "  " + typeof y);
y = String(y);
console.log(y + "  " + typeof y);
console.log("\n\n");

//boolean to String
let z = true;
console.log(z + "  " + typeof z);
z = String(z);
console.log(z + "  " + typeof z);

//undefined to string
let zz;
console.log(zz + "  " + typeof zz);
zz = String(zz);
console.log(zz + "  " + typeof zz);
console.log("\n\n");

// null to String
let yy = null;
console.log(
  yy + " " + typeof yy + " " + String(null) + "hi" + " " + typeof String(null)
);

//String to number

let xx = "10";
console.log(xx + " " + typeof xx + "  " + parseInt(xx, 2));
xx = "10.5";
console.log(xx + " " + typeof xx + "  " + parseFloat(xx));

let a = new Date();
console.log(a);
console.log(Number(a));
Boolean(1);
