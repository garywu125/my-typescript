/**
 * Overloading Constructors
 *    type script allow only one constructor , if you want to overload constructor , using union type
 * 
 * typescript 4.3
 *   tuntime private varible with getter && setter
 *   #name
 * 
 **/

 export class MyClass
 {
    #value : string=""; 
     constructor(value : string | number)
     {
         if(typeof value === "string")
         {
             this.#value = value;
         }
 
         if(typeof value === "number")
         {
             this.#value = value.toString();
         }
     }
 
     get myvalue():string { return "hellow wolrd" }     

     
 }

 let m=new MyClass("shake hand") 

 console.log(m.myvalue)