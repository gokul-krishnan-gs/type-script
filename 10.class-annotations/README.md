# 📖 Class Annotations in TypeScript

## 🧒 Kid-like Explanation

Think of a **blueprint of a house 🏠**.
👉 The **blueprint** = class
👉 The **rooms inside** = properties
👉 The **actions like openDoor()** = methods

Now, with **TypeScript annotations**, we tell **what type of thing** each room/action should be. Like:
* "This room must be a *number*"
* "This room must be a *string*"

That way, no mistake happens when building houses.

## ✅ Definition

In TypeScript, **class annotations** mean adding **type information** (string, number, boolean, custom type, etc.) to class **properties, constructor parameters, and methods**.

## ✅ Syntax

```typescript
class ClassName {
  propertyName: type;   // property annotation

  constructor(paramName: type) {
    this.propertyName = paramName;
  }

  methodName(param: type): returnType {
    return something;
  }
}
```

## ✨ Examples

### 1. **Basic Class with Annotations**

```typescript
class Person {
  name: string;   // property annotation
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {  // method return type = void
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p1 = new Person("Gokul", 22);
p1.greet(); // Hello, my name is Gokul
```

### 2. **Method with Return Type**

```typescript
class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }

  isPositive(num: number): boolean {
    return num > 0;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3));       // 8
console.log(calc.isPositive(-10)); // false
```

### 3. **Readonly + Optional Properties**

```typescript
class Book {
  readonly title: string;  // cannot be changed later
  author?: string;         // optional property

  constructor(title: string, author?: string) {
    this.title = title;
    this.author = author;
  }
}

const b1 = new Book("TypeScript Guide", "John");
const b2 = new Book("Anonymous Book");
```

## ⭐ Standout Points

* ✅ **Property annotations** → give types to class fields.
* ✅ **Constructor annotations** → ensure parameters are correct types.
* ✅ **Method annotations** → define parameter & return types.
* ✅ `void` = no return.
* ✅ `readonly` = can't be changed after initialization.
* ✅ `?` = property is optional.
