/*
modules  - break the codes upto separate files

           done by using export , import ,as and default keywords

      default -  keyword which is used for default export 

       export - There are two types of export is present 
                1) named export
                2) default export 

               In named export we can transefer " n " number of values (varaiables , functions )
               curly braces are mandatory during multiple transfer --> export{name , age};

               In default export we can transfer only on value --> each file can have only one default export 
               curly braces are not mandatory here --> export default name;

      import - Imports have set of noms for  importing values and functions from external file
                
               importing named export   -  named export are done by using the same name as we send the values (varaiables , functions)
                                           like export curly braces are mandatory during importing a named export 
                                           import {name,age} from "/.main.js"

               importing default export -  we can do default import by using any name no need use the same name during export
                                           curly braces aren't mandatory during default import
                                            import userChoice from "/.main.js" --> import the default export name.Here,there is no need to use the same name as export name so I use userChoice
                                          
         as  -  as is a keyword which is used to change the name of values (varaiables , functions) which are exported using named export
                 import{name as userName , age as elegibility} from "./main.js";
*/

import fun from "./23.a_modulesDemo.js";
console.log(fun());

import { name, age as eligiblity } from "./23.a_modulesDemo.js";
console.log(name, eligiblity);
