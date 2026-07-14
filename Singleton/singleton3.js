// Now we enforce a true Singleton by tracking the instance
// at module level and guarding the constructor.
let instance;
let counter = 0;

class Counter {
    constructor() {
        // If an instance already exists, block creation of a second one.
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

const counter1 = new Counter();
const counter2 = new Counter();
// Error: You can only create one instance!