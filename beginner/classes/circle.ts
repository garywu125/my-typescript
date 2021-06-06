/**
 *  reference : https://instil.co/blog/typescript-43-objects/ 
 * Accessibility, Properties & Parameter Properties
 *   
 * 
 */

class Circle {
    //  initialise properties outside of the constructor.
    readonly diameter = this.radius * 2;
    readonly area = this.calculateArea();

    constructor(readonly radius: number) {}

    private calculateArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    prettyPrint() {
        console.log(`Circle with radius ${this.radius}`);
    }
}


const circle1= new Circle(20)

console.log(`diameter: ${circle1.diameter} , area : ${circle1.area}`)

const json = JSON.stringify(circle1); 
console.log("class based object :")
console.log("encoded to json :",json)
circle1.prettyPrint()

//  Deserialized with type assertion:
//
//  <<when we deserialise from JSON we are recreating objects that have no link to any classes we’ve written >>
//  <<type assertions are not casts; we are only making an assertion >>
//   We are informing the compiler about something that it is not capable of inferring for itself.
const circle2 = JSON.parse(json) as Circle;
console.log(" decode  from json to object",circle2)
console.log(circle2 instanceof Circle); // ** false
if (circle2 instanceof Circle) circle2.prettyPrint()  // ** TypeError: circle2.prettyPrint is not a function

/**
 *  it will be better to transform data using interface  (without method)
 *  You may find with TypeScript that you tend towards a more function-oriented approach for this reason, 
 *  using basic objects adhering to an interface and free functions that take these objects as inputs.
 */
