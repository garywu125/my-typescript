/**
 *  specifying separate getter and setter types in an interface.
 *  The only restriction is that the getter type must be assignable to the setter type.
 *   
 *  factory function with interface
 * 
 * 
 */



interface Thing {
    get size(): number
    set size(value: number | string | boolean);
}

// makeThing():factory function
function makeThing(): Thing {
    let size = 0;
    return {
        get size(): number {
            return size;
        },
        set size(value: string | number | boolean) {
            let num = Number(value);

            // Don't allow NaN and stuff.
            if (!Number.isFinite(num)) {
                size = 0;
                return;
            }

            size = num;
        }
    }
}

// factory function
let thing = makeThing()

// Assigning other types to `thing.size` works!
thing.size = "hello";
thing.size = true;
thing.size = 42;

// Reading `thing.size` always produces a number!
let mySize: number = thing.size;

console.log(mySize)