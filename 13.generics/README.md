# 📖 Generics in TypeScript

## 🧒 Kid-like Explanation

Think of **Generics like a box 📦**.
* Sometimes the box has toys 🎮
* Sometimes it has fruits 🍎
* Sometimes it has books 📚

The box is always the same, but what's inside **can change**. 👉 Generics let us **write code once** and use it with **different types safely**.

## ✅ Definition

**Generics** allow us to create reusable components (functions, classes, interfaces) that **work with any type** while keeping **type safety**.

## 1. **Generic Functions**

### ✅ Syntax

```typescript
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello")); // Hello
console.log(identity<number>(123));     // 123
```

👉 `T` is a **type placeholder** (can be anything).
👉 The actual type is decided when function is called.

### 🔹 Without Generics (Problem)

```typescript
function identityBad(value: any): any {
  return value;
}

let result = identityBad(123); 
result.toUpperCase(); // ❌ runtime error
```

👉 With `any`, we lose type safety.
👉 With Generics, TypeScript knows the type.

## 2. **Generic Arrays**

```typescript
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst<number>([10, 20, 30])); // 10
console.log(getFirst<string>(["a", "b", "c"])); // "a"
```

👉 The array type is **decided at runtime**.

## 3. **Generic Interfaces**

```typescript
interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 123 };
const stringBox: Box<string> = { content: "hello" };
```

👉 `Box<T>` can hold any type safely.

## 4. **Generic Classes**

```typescript
class Storage<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const numberStorage = new Storage<number>();
numberStorage.add(10);
numberStorage.add(20);

const stringStorage = new Storage<string>();
stringStorage.add("Hello");

console.log(numberStorage.getAll()); // [10, 20]
console.log(stringStorage.getAll()); // ["Hello"]
```

👉 One class, many types.

## 5. **Generic Constraints**

👉 Sometimes we don't want `T` to be "any type".
👉 We restrict `T` with `extends`.

```typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(value: T): void {
  console.log(value.length);
}

logLength("Hello");   // ✅ works (string has length)
logLength([1, 2, 3]); // ✅ works (array has length)
// logLength(123); ❌ Error (number has no length)
```

## 6. **Multiple Generics**

```typescript
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

const p1 = pair<string, number>("age", 22); // ["age", 22]
const p2 = pair<number, boolean>(1, true);  // [1, true]
```

👉 `K` and `V` can be different types.

## 7. **Default Generic Types**

```typescript
function greet<T = string>(name: T): T {
  return name;
}

console.log(greet("Gokul")); // works as string
console.log(greet<number>(123)); // works as number
```

👉 If no type is given, `string` is the default.

## ⭐ Standout Points

* ✅ Generics = **type-safe reusable code**.
* ✅ Use `T` (or `K, V, U`) as type placeholders.
* ✅ Can be used in **functions, arrays, classes, interfaces**.
* ✅ `extends` restricts types → **constraints**.
* ✅ Multiple Generics → handle multiple type parameters.
* ✅ Supports **default values** for flexibility.
