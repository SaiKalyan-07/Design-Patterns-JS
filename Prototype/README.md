# Prototype Pattern

## What is it?
The Prototype pattern allows objects to share behavior through a shared
"prototype" object, rather than each instance duplicating its own copy
of every method. In JavaScript, every object created from a class
automatically links to that class's prototype.

## Use Cases
- Cloning complex objects (deep copy)
- Creating multiple instances of objects with default properties
- Avoiding reinitializing objects in performance-critical apps
- Copying objects in game development (e.g., characters)
- Object pooling for performance optimizations

## Files in this folder

| File | What it demonstrates |
|---|---|
| `prototype1.js` | A basic class — methods like `bark()` live on the prototype automatically and are shared across instances, not duplicated per object. |
| `prototype2.js` | Adding a new method directly to `Dog.prototype` *after* the class is defined — every instance (existing and future) immediately gains access to it. |
| `prototype3.js` | The prototype chain via inheritance — `SuperDog extends Dog` means `SuperDog` instances can use both their own methods and everything from `Dog`'s prototype. |
| `prototype4.js` | Method overriding — `SuperDog` redefines `bark()`, and JS resolves to the closest version in the prototype chain first, without affecting the original `Dog` class. |

## Key Takeaway
Methods defined inside a class body aren't copied into every instance —
they live once on the prototype and are shared by reference. This is
what makes JavaScript's inheritance model memory-efficient: instead of
cloning behavior, objects delegate up the prototype chain to find it.