# 📖 Interfaces in TypeScript

## 🧒 Kid-like Explanation

Think of an **interface like a contract 📜**. 👉 It says **what must exist** but **not how it works**.

Example:
* If I give you a **Remote Control contract**, it says → "must have `powerButton`, `volumeUp`, `volumeDown`".
* It doesn't care how you build the remote, but you must follow the rules.

## ✅ Definition

An **interface** in TypeScript defines the **shape of objects, functions, or classes**. It's like a **blueprint** to enforce structure.

## 1. **Interface for Objects**

### ✅ Syntax

```typescript
interface Person {
  name: string;
  age: number;
  isStudent?: boolean; // optional
}

const p1: Person = {
  name: "Gokul",
  age: 22,
};
```

👉 Rules enforced:
* `name` must be string
* `age` must be number
* `isStudent` is optional

## 2. **Interface for Functions**

### ✅ Syntax

```typescript
interface Add {
  (a: number, b: number): number;
}

const addNumbers: Add = (x, y) => x + y;

console.log(addNumbers(5, 3)); // 8
```

👉 Here, interface defines a **function signature**.

## 3. **Interface for Classes**

### ✅ Syntax

```typescript
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Woof 🐶");
  }
}

const d1 = new Dog("Tommy");
d1.makeSound(); // Woof
```

👉 `implements` keyword = class must follow interface rules.

## 4. **Extending Interfaces**

### ✅ Syntax

```typescript
interface Living {
  breathe(): void;
}

interface Person extends Living {
  name: string;
}

const p2: Person = {
  name: "Krish",
  breathe() {
    console.log("Breathing...");
  },
};
```

👉 Just like inheritance: one interface can **extend another**.

## 5. **Declaration Merging**

👉 If we write the **same interface name multiple times**, TypeScript **merges them together**.

### ✅ Example

```typescript
interface User {
  id: number;
}

interface User {
  name: string;
}

const u1: User = {
  id: 1,
  name: "Gokul",
};
```

👉 Both `id` and `name` are now part of `User`.

## ⭐ Standout Points

* ✅ Interfaces define the **shape of data** (object, function, class).
* ✅ `implements` → used by classes.
* ✅ `extends` → used to inherit interfaces.
* ✅ Interfaces support **optional properties** (`?`) and **readonly properties**.
* ✅ **Declaration merging** is unique to interfaces (not type aliases).
* ✅ Interfaces are **better for contracts** in OOP, while type aliases are better for **combinations (union, intersection)**.
