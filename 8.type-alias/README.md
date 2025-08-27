# 📖 Type Aliases in TypeScript

## 🧒 Kid-like Explanation

Imagine you have to **say your friend's very long name every time** 😫. Instead, you give him a **nickname** 🏷️.

That's what a **type alias** is → it's like giving a **nickname to a type** so you can reuse it.

## ✅ Definition

A **type alias** lets you **create a new name** for a type (primitive, object, union, intersection, etc.).

## ✅ Syntax

```typescript
type AliasName = existingType;
```

## ✅ Example 1: Simple Type Alias

```typescript
type Age = number;

let myAge: Age = 25;  // same as number
```

## 📖 Union Type Aliases

### 🧒 Kid-like Explanation
Union = "OR" → something can be **this OR that**. Like a light switch → it can be `"ON"` **or** `"OFF"`.

### ✅ Syntax

```typescript
type AliasName = Type1 | Type2 | Type3;
```

### ✅ Example 2: Union Type Alias

```typescript
type Status = "success" | "error" | "loading";

let s1: Status = "success";  
let s2: Status = "loading";  
// let s3: Status = "done"; ❌ Error (not allowed)
```

```typescript
type ID = number | string;

let id1: ID = 101;    // ✅ number
let id2: ID = "abc";  // ✅ string
```

## 📖 Intersection Type Aliases

### 🧒 Kid-like Explanation
Intersection = "AND" → something must be **this AND that** at the same time. Like a **superhero who is both Ironman AND Spiderman** 🦸.

### ✅ Syntax

```typescript
type AliasName = Type1 & Type2;
```

### ✅ Example 3: Intersection Type Alias

```typescript
type Person = {
  name: string;
};

type Employee = {
  id: number;
};

type Worker = Person & Employee;

const w1: Worker = {
  name: "Alice",
  id: 123,
};
```

Here, `Worker` must have **both name and id**.

## ⭐ Standout Points

* **Type Alias** → A **nickname** for a type (primitive, object, union, intersection).
* **Union** (`|`) → "OR" → allows multiple types.
* **Intersection** (`&`) → "AND" → combines multiple types.
* You can mix unions + intersections for powerful typing.

# 📖 Literal Types

## 🧒 Kid-like Explanation

Imagine your teacher says: 👉 "You can only answer **YES** or **NO**."

That's what **literal types** are — instead of allowing all strings/numbers, you **restrict** the value to a few exact choices.

## ✅ Definition

A **literal type** means a variable can have **only a specific fixed value(s)**.

## ✅ Syntax

```typescript
let variable: "value1" | "value2" | "value3";
```

## ✅ Example 1: String Literals

```typescript
type Direction = "up" | "down" | "left" | "right";

let move: Direction;

move = "up";    // ✅ allowed
move = "left";  // ✅ allowed
// move = "jump"; ❌ not allowed
```

## ✅ Example 2: Number Literals

```typescript
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

let roll: DiceRoll;

roll = 4;  // ✅
roll = 6;  // ✅
// roll = 7; ❌ not allowed
```

## ⭐ Standout Points for Literals

* Restricts values to **exact fixed choices**.
* Used with **unions** for better safety.
* Great for **enums-like behavior**.

---

# 📖 Tuples

## 🧒 Kid-like Explanation

A **tuple** is like a **school bag 🎒 with fixed slots**.
👉 Slot 1: pencil ✏️ (string)
👉 Slot 2: eraser 🧽 (number)

You can't swap them. Order + type are fixed.

## ✅ Definition

A **tuple** is a **fixed-length array with specific types at each position**.

## ✅ Syntax

```typescript
let tupleName: [Type1, Type2, Type3];
```

## ✅ Example 1: Simple Tuple

```typescript
let person: [string, number];

person = ["Alice", 25];  // ✅ correct order
// person = [25, "Alice"]; ❌ wrong order
```

## ✅ Example 2: With Optional & Rest

```typescript
// Optional element (?)
let student: [string, number?];
student = ["Bob"];         // ✅
student = ["Bob", 20];     // ✅

// Rest element (...)
let rgb: [number, ...string[]];
rgb = [255, "red", "green"];  // ✅
```

## ✅ Example 3: Tuple in Function

```typescript
function getUser(): [string, number] {
  return ["Alice", 30];
}

const [name, age] = getUser();
console.log(name); // Alice
console.log(age);  // 30
```

## ⭐ Standout Points for Tuples

* Tuples = **arrays with fixed order & types**.
* Support **optional (?)** and **rest (...)** elements.
* Useful for **returning multiple values** from functions.
* Safer than normal arrays (can't mix random types).
