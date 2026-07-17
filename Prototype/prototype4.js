// Demonstrates METHOD OVERRIDING through the prototype chain.
// When a subclass defines a method with the same name as its parent,
// JavaScript resolves to the CLOSEST one in the chain first.
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return `Woof!`;
    }
}

Dog.prototype.play = function () {
    console.log(`${this.name} is playing!`);
};

class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }

    fly() {
        console.log(`${this.name} is flying!`);
    }

    // OVERRIDES Dog's bark() — SuperDog has its own version.
    // JS checks SuperDog.prototype first, finds bark() here,
    // and never looks further up to Dog.prototype.
    bark() {
        return `Woof! (with a superhero echo!)`;
    }
}

const dog1 = new SuperDog("Daisy");
const dog2 = new Dog("Max");

console.log(dog1.bark()); // "Woof! (with a superhero echo!)" — overridden version
console.log(dog2.bark()); // "Woof!" — original version, untouched