// Production-style Singleton:
// - Instance is created once, immediately, when the module loads.
// - Object.freeze() prevents any code from modifying the instance
//   (adding/removing/changing properties).
// - We export the INSTANCE itself, not the class — so every file
//   that imports this gets the exact same object automatically.
let instance;
let counter = 0;

class Counter {
    constructor() {
        if (instance) {
            throw new Error("You can only create one instance!");
        }
        instance = this;
    }
    getInstance() {
        return this;
    }
    getCount() {
        return counter;
    }
    increment() {
        return ++counter;
    }
    decrement() {
        return --counter;
    }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;