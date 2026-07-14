// Same class as singleton1.js, but here we PROVE the problem:
// even though `counter` (the module-level variable) is shared,
// the two instances themselves are NOT the same object.
let counter = 0;

class Counter {
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

// This logs false — shared state is NOT the same as a single instance.
console.log(counter1.getInstance() === counter2.getInstance()); // false