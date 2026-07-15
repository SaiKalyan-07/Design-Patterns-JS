// Adds real validation logic on top of the basic proxy mechanics.
// Note: the `set` trap below doesn't always return a boolean —
// this works here, but is technically not spec-compliant
// (fixed in proxy3.js using Reflect).
const person = {
    name: 'John Doe',
    age: 42,
    email: 'john.doe@example.com',
    country: 'USA',
};

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        // BUG: falsy values (0, '', false) would incorrectly
        // be treated as "doesn't exist" here — fixed in proxy3.js
        if (!obj[prop]) {
            console.log(
                `Hmm.. this property doesn't seem to exist on the target object`
            );
        } else {
            console.log(`The value of ${prop} is ${obj[prop]}`);
            return obj[prop];
        }
    },
    set: (obj, prop, value) => {
        if (prop === "age" && typeof value !== "number") {
            console.log(`Sorry, you can only pass numeric values for age.`);
        } else if (prop === "name" && value.length < 2) {
            console.log(`You need to provide a valid name.`);
        } else {
            console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
            obj[prop] = value;
        }
        // No explicit return here in the invalid branches —
        // in strict mode this can throw a TypeError.
    },
});

// let's change to an invalid name
personProxy.name = 'k';
console.log(personProxy.name);

// let's try an invalid age
console.log(personProxy.age = 'asdf');
console.log(personProxy.age);

// let's try a valid age
personProxy.age = 50;
console.log(personProxy.age);

// let's try a valid name
personProxy.name = 'John'
console.log(personProxy.name);