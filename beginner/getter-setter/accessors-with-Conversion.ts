/**
 *  reference : https://levelup.gitconnected.com/typescript-4-3-i-object-your-honour-2db0368c07cb
 *  Accessors are useful for providing an interface which is consumed like a property but with more complicated logic under the hood
 * 
 *   Accessor with conversion : accept any type of input ,via setter accessor method to convert to cananical type
 */


class Thing {
    // True Private Members
    #size = 0;
    // size looks and feels like a property to the consumer, but in reality it is calling functions that read and write size

    get size(): number {
        return this.#size;
    }

    // Accessors with Conversion
    // accept any kind of type , via setter to converted to a canonical type
    set size(value: string | number | boolean) {
        let num = Number(value);

        // Don't allow NaN and stuff.
        if (!Number.isFinite(num)) {
            this.#size = 0;
            return;
        }

        this.#size = num;
    }
}

let thing = new Thing();

// Assigning other types to `thing.size` works!
thing.size = "hello";
thing.size = true;
thing.size = 42;

// Reading `thing.size` always produces a number!
let mySize: number = thing.size;

console.log(mySize)