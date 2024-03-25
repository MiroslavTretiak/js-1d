class Point {
    //Privatus kintamieji
    #x = 0;
    #y = 0;
    //Construtoriai
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    //Get ir set
    get x() {
        return this.#x;
    }
    set x(x) {

    }
    get y() {
        return this.#y;
    }
    set y(y) {
        this.#y = y;
    }

    // Metodas suskaiciuoti atsumui iki kooridinaciu pradzios
    distanceFromOrigin() {
        return Math.sqrt(this.#x ** 2 + this.#y ** 2);
    }

    //Metodas tasko pastumimui
    translate(dx, dy) {
        this.#x += dx;
    }

    //Metodas tasko isvedimui
    print() {
        return `[${this.x}, ${this.y}]`;
    }

    //Metodas nuo a iki b
    distance(p) {
        return Math.sqrt((this.x - p.x) ** 2 + (this.y - p.y) ** 2);
    }
}

const a = new Point(3, 5);
const b = new Point(0, 10);

b.translate(2, 0);

console.log(a.print());
console.log(b.print());

console.log(`Atsumas iki kooridinaciu pradzios tasko: ${a.distanceFromOrigin()}`)
console.log(`Atsumas iki kooridinaciu pradzios tasko: ${b.distanceFromOrigin()}`)
console.log(`Atsumas nuo a iki b: ${a.distance(b)}`)

