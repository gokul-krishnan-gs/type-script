# 📖 Factory Functions in TypeScript

## 🧒 Kid-like Explanation

Think of a **factory** 🏭 that **makes toys (objects)**. Whenever you ask the factory, it builds a **new toy with the same design** but can change the name, color, etc.

That's exactly what a **Factory Function** does — it's a normal function that **returns an object**.

## ✅ Definition

A **Factory Function** is a **function that creates and returns objects** without using the `new` keyword.

## ✅ Syntax

```typescript
function factoryName(parameters): ReturnType {
  return {
    key: value,
    ...
  };
}
```

## ✅ Example 1: Simple Factory Function

```typescript
// Step 1: Define a type
type Car = {
  brand: string;
  year: number;
  drive: () => void;
};

// Step 2: Create a Factory Function
function createCar(brand: string, year: number): Car {
  return {
    brand,
    year,
    drive: () => {
      console.log(`${brand} is driving 🚗`);
    },
  };
}

// Step 3: Use it
const car1 = createCar("Toyota", 2022);
const car2 = createCar("Honda", 2023);

car1.drive(); // Toyota is driving 🚗
car2.drive(); // Honda is driving 🚗
```

## ✅ Example 2: Factory Function with Default Values

```typescript
type User = {
  name: string;
  role: string;
};

function createUser(name: string, role: string = "guest"): User {
  return {
    name,
    role,
  };
}

const u1 = createUser("Alice"); // role = guest
const u2 = createUser("Bob", "admin");

console.log(u1); // { name: "Alice", role: "guest" }
console.log(u2); // { name: "Bob", role: "admin" }
```

## ⭐ Standout Points

* ✅ No need for `new` keyword.
* ✅ More flexible than classes for **small object creation**.
* ✅ Can return **different shapes of objects**.
* ✅ Great when you don't need inheritance.
