// Basic Counter class — no singleton enforcement yet.
// Anyone can call `new Counter()` as many times as they want.
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