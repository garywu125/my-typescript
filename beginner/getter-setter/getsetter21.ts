

class Circle {
    constructor(public radius: number) {}
    
    get diameter(): number {
        return this.radius * 2;
    }
    
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

const circle = new Circle(12);

console.log(circle.diameter); // 24
circle.diameter = "100";      // Writing as string
console.log(circle.diameter);   // 100
console.log(circle.radius);   // 50

circle.diameter = "hello";      // Writing as string , but not finite number
console.log(circle.diameter);   // 0
console.log(circle.radius);   // 0
