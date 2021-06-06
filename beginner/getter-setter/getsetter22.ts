import { createUnparsedSourceFile } from "typescript";

/**
 *  interface + factory function
 * 
 * 
 */
interface Circle {    
    radius:number;
    get diameter(): number;
    set diameter(value: number | string);
}

// makeThing():factory function
function makeCircle(): Circle {
    let radius:number=0;
    return {   
        radius,     
        get diameter(): number {
            return this.radius * 2;
        },        
        set diameter(value: number | string) {
            value = Number(value);
            // Don't allow NaN and stuff.
            if (!Number.isFinite(value)) {
                this.radius = 0;
                return;
            }
            this.radius = value / 2;
        }
    }
}

// factory function
const circle = makeCircle();
circle.radius =12
console.log(circle.diameter); // 24

// Assigning other types to `circle.diameter` works!
circle.diameter = "100";      // Writing as string
console.log(circle.diameter);   // 100
console.log(circle.radius);   // 50

circle.diameter = "hello";      // Writing as string , but not finite number
console.log(circle.diameter);   // 0
console.log(circle.radius);   // 0
