// Base class using a constructor.
// No manual prototype manipulation yet — just a plain class.
class Dog {
    constructor(name) {
        this.name = name; // each instance gets its own "name"
    }

    bark() {
        // this method lives on Dog.prototype automatically,
        // shared by all instances (not duplicated per object)
        return `Woof!`;
    }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

console.log(dog1.bark()); // Woof!
console.log(dog2.bark()); // Woof!
console.log(dog3.bark()); // Woof!