// Demonstrates the PROTOTYPE CHAIN through inheritance.
// SuperDog inherits everything from Dog's prototype,
// plus adds its own method.
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
        super(name); // calls Dog's constructor
    }

    // method specific to SuperDog only
    fly() {
        console.log(`${this.name} is flying!`);
    }
}

const dog1 = new SuperDog("Daisy");
const dog2 = new Dog("Max");

// dog1 (SuperDog) can use both inherited AND its own methods
dog1.bark();  // inherited from Dog class
dog1.play();  // inherited from Dog's prototype
dog1.fly();   // specific to SuperDog

// dog2 (plain Dog) cannot access SuperDog-only methods
dog2.bark();  // works — part of Dog class
dog2.play();  // works — part of Dog's prototype
// dog2.fly(); // Error: dog2.fly is not a function