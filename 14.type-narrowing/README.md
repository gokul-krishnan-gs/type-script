# 📖 Type Narrowing, Type Guards, `instanceof`, Intersection Types

## 🟢 1. Type Narrowing

### 🧒 Kid Explanation

Imagine you have a **mystery gift box 🎁**.
* It could have a toy 🧸 or a book 📕.
* You check inside → "Oh, it's a toy!" 

That's narrowing → TypeScript **figures out the exact type** by checking conditions.

### ✅ Definition

Type narrowing = when TypeScript reduces a **broad type** into a **more specific type** based on conditions.

### ✅ Example

```typescript
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("ID in uppercase:", id.toUpperCase()); // narrowed to string
  } else {
    console.log("ID doubled:", id * 2); // narrowed to number
  }
}

printId("gokul"); // ID in uppercase: GOKUL
printId(22);      // ID doubled: 44
```

## 🟢 2. Type Guards

### 🧒 Kid Explanation

A **security guard 👮** checks → "You can enter only if you're a student". 

Similarly, Type Guards = functions or checks that **confirm a type** at runtime.

### ✅ Definition

A **Type Guard** is an expression that **checks and tells TypeScript what type something is**.

### ✅ Example with `in` operator

```typescript
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function animalSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark(); // narrowed to Dog
  } else {
    animal.meow(); // narrowed to Cat
  }
}
```

## 🟢 3. `instanceof` Operator

### 🧒 Kid Explanation

Imagine you have a class **Car 🚗** and a class **Bike 🚲**. You look at a vehicle → "Oh! This is a Car!" 

That's what `instanceof` does → checks if an object belongs to a class.

### ✅ Syntax

```typescript
if (object instanceof ClassName) { ... }
```

### ✅ Example

```typescript
class Dog {
  bark() {
    console.log("Woof");
  }
}

class Cat {
  meow() {
    console.log("Meow");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog()); // Woof
makeSound(new Cat()); // Meow
```

👉 Used for **class-based narrowing**.

## 🟢 4. Intersection Types

### 🧒 Kid Explanation

Think of **red paint 🎨** + **blue paint 🎨** → mixed → **purple paint**. 

Intersection type = **combine multiple types into one**.

### ✅ Syntax

```typescript
type A = { name: string };
type B = { age: number };

type Person = A & B;

const p1: Person = {
  name: "Gokul",
  age: 22,
};
```

👉 `Person` must have **both properties**.

## ⭐ Standout Points

* ✅ **Type Narrowing** = TypeScript figures out exact type from conditions.
* ✅ **Type Guards** = Custom checks (`typeof`, `in`, user-defined functions).
* ✅ `instanceof` = Checks if object is created from a class.
* ✅ **Intersection Types** = Combine multiple types with `&`.
* ✅ Helps avoid runtime errors by making TypeScript smarter.
