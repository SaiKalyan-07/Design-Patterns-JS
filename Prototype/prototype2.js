// Demonstrates adding a method to the prototype AFTER
// the class has already been defined.
class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return `Woof!`;
    }
}

// Adding a new method directly onto the prototype.
// Every existing AND future instance automatically gets access to it,
// because they all share the same prototype object.
Dog.prototype.play = function () {
    console.log(`${this.name} is playing!`);
};

const dog1 = new Dog("Daisy");
dog1.bark();  // works — defined in the class
dog1.play();  // works — added to the prototype afterward