// Basic Proxy mechanics.
// A Proxy sits between your code and the real ("target") object.
// The `get` trap fires on every property READ.
// The `set` trap fires on every property WRITE.
const person = {
    name: 'John Doe',
    age: 42,
    email: 'john.doe@example.com',
    country: 'USA',
};

// use the "Proxy" keyword to create a proxy
const personProxy = new Proxy(person, {
    // target is same as person
    get: (target, prop) => {
        console.log(`The value of ${prop} is ${target[prop]}`);
        return target[prop];
    },
    set: (target, prop, value) => {
        console.log(`Changed ${prop} from ${target[prop]} to ${value}`);
        target[prop] = value;
        return true;
    },
});

// This triggers BOTH traps: `get` (to read current age)
// and `set` (to write the incremented value).
personProxy.age += 1;

// This triggers only the `get` trap.
console.log(personProxy.age);