export const name = "jk";
export const age = 19;
export default function fun() {
  return "[ name = " + name + ", age = " + age + " ]";
}
console.log("hi");
/*
 export can be done in two ways 
 type - 1 :
     export  const name = "jk";
     export const age = 19;
     export defualt   const fun = ()=>{
      return 0;
     }
     type - 2:
     export {name,age};
 */
