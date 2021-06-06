/**
 *  classes in TypeScript is that an object is an instance of a class because of its prototype.
 * 
 *  It is worth noting, that like many things in TypeScript, <private and protected modifiers  only apply at compile time.>
 *  They are there to help and protect the developer.
 *  <At runtime>, when everything has been converted to JavaScript, <all properties will exist in the object and are accessible>.
 *  This includes when we serialise out objects to JSON.
 * 
 * 
 * ECMAScript #private Class Elements : 
 * runtime private member : TypeScript 4.3 extends ECMAScript private support to include methods and accessors
 *     #name : private field
 *   #name() : private method
 *   get #name() : private accessor 
 * 
 *   Clarity in the Override : 
 * 
 * 
 **/ 

 class Person{    
    // "native" private class fields in TypeScript.    
    #food:string="rice"     
    // parameter property
    constructor(public name:string="nocodb") {
        this.name = name
      }
    eat():void{
        console.log(this.name+` eats when hungry. ${this.#getFood()}`)
    }
    // "native" private  method  in class  in TypeScript.
    #getFood():string {
        return this.#food
    }
     // "native" private accessor class  in TypeScript.
    get #someValue() {
        return 100;
    }
}
 
class Student extends Person{
    // variables
    rollnumber:number;
 
    // constructors
    constructor(rollnumber:number, name1:string){
        super(name1); // calling Parent's constructor
        // super(); // calling Parent's constructor using constructor parameter default value
        this.rollnumber = rollnumber
        
    }
 
    // functions
    displayInformation():void{
        console.log("Name : "+this.name+", Roll Number : "+this.rollnumber)
    }
 
    // overriding super class method
   override eat():void{
        console.log(this.name+" eats during break.")
    }
}
 
var student1 = new Student(2, "Rohit")
// student1.#someValue; 
student1.displayInformation()
student1.eat()
