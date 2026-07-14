# Singleton Pattern

## What is it?
The Singleton pattern restricts a class to a single instance and provides
a global point of access to it. Useful when exactly one object is needed
to coordinate actions across the system.

## Use Cases
- Database connection instance
- Global configuration settings
- Logger utility (centralized logging)
- Cache manager for shared data
- Maintaining a single instance of a global application state

## Files in this folder

| File | What it demonstrates |
|---|---|
| `singleton1.js` | A plain class with no singleton enforcement — anyone can create multiple instances. |
| `singleton2.js` | Proves the problem: creating two instances (`new Counter()` twice) results in two *different* objects, even though they share the same module-level `counter` variable. |
| `singleton3.js` | Enforces a single instance by checking inside the constructor — throws an error if an instance already exists. |
| `singleton4.js` | The real-world pattern: creates one instance immediately, freezes it with `Object.freeze()`, and exports that single instance — so every import gets the exact same object. |

## Key Takeaway
Shared state (like a module-level variable) is not the same as a single
instance. True Singleton behavior requires explicitly preventing more
than one instance from being created — either by guarding the
constructor (see `singleton3.js`) or by exporting a pre-created,
frozen instance instead of the class itself (see `singleton4.js`,
the recommended approach for production code).