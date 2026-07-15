# Proxy Pattern

## What is it?
The Proxy pattern controls access to an object by placing an intermediary
(a "proxy") between the caller and the real ("target") object. The proxy
can intercept and customize fundamental operations like property reads
(`get`) and writes (`set`).

## Use Cases
- Validation before setting a property value
- Logging or tracking access to an object's properties
- Formatting or transforming values on get/set
- Access control (restricting reads/writes to certain properties)

## Files in this folder

| File | What it demonstrates |
|---|---|
| `proxy1.js` | Basic Proxy mechanics — `get` and `set` traps log every read/write. No validation yet. |
| `proxy2.js` | Adds real validation logic (age must be numeric, name must be 2+ chars) — but the `set` trap doesn't consistently return a boolean, which is a spec-compliance issue. |
| `proxy3.js` | Fixes proxy2's issues: uses `Reflect.get`/`Reflect.set`/`Reflect.has` instead of raw property access, and always returns a proper boolean from `set` — the recommended, best-practice approach. |

## Key Takeaway
Always return a boolean from a `set` trap (`true` for success, `false` for
failure) — this is required by the Proxy spec and prevents `TypeError`s in
strict mode. Prefer `Reflect.*` methods over direct property access inside
traps, since they correctly mirror default JavaScript behavior (including
edge cases like inherited properties and prototype-chain getters/setters).

## Note on `person.age += 1`
This single line triggers **both** the `get` trap (to read the current
value) and the `set` trap (to write the incremented value) — a common
point of confusion when first learning Proxy.