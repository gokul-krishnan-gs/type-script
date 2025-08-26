# 📖 Type Annotations in TypeScript

## 🧒 Kid-like Explanation

Think of annotations as **stickers on your toys** 🧸.

* If you put a sticker that says **"Car 🚗"**, you can't suddenly use it as a **Doll 🪆**.
* In TypeScript, annotations **tell the computer what kind of value a variable should hold**.

## 📚 Definition

* **Type annotations** let you explicitly tell TypeScript the type of a variable, function parameter, or return value.
* Syntax:

```typescript
let variableName: type = value;
```

## 📝 Variable Annotations (All Main Types)

### 1. **Number**

```typescript
let age: number = 25;
```

### 2. **String**

```typescript
let firstName: string = "Gokul";
```

### 3. **Boolean**

```typescript
let isLoggedIn: boolean = true;
```

### 4. **Array**

```typescript
let scores: number[] = [10, 20, 30];   // array of numbers
let names: string[] = ["Ram", "Sam"]; // array of strings
```

### 5. **Tuple** (Fixed-size, mixed types)

```typescript
let person: [string, number] = ["Gokul", 21];
```

### 6. **Object**

```typescript
let user: { name: string; age: number } = {
  name: "Krishnan",
  age: 21
};
```

### 7. **Any** (turns off type checking — avoid unless needed)

```typescript
let randomValue: any = "hello";
randomValue = 10; // no error
```

### 8. **Unknown** (safer alternative to `any`)

```typescript
let value: unknown = "Hello";
// value.toUpperCase(); ❌ error, must check first
if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅
}
```

### 9. **Void** (no return value in functions)

```typescript
function greet(): void {
  console.log("Hello!");
}
```

### 10. **Never** (function never returns)

```typescript
function throwError(msg: string): never {
  throw new Error(msg);
}
```

### 11. **Null & Undefined**

```typescript
let u: undefined = undefined;
let n: null = null;
```

### 12. **Union Types** (variable can hold multiple types)

```typescript
let id: number | string;
id = 101;
id = "abc"; // both valid
```

### 13. **Literal Types** (exact values only)

```typescript
let direction: "left" | "right";
direction = "left"; // ✅
direction = "up";   // ❌ not allowed
```

### 14. **Type Alias** (custom name for types)

```typescript
type ID = number | string;
let userId: ID = 123;
```

## ⭐ Standout Points

* Always prefer **specific types** instead of `any`.
* Use **union** when variable can hold multiple kinds of values.
* Use **type aliases** or **interfaces** for objects to keep code clean.
* TypeScript often **infers types automatically** (you don't always need to write them).

## ⚡ In Short

Type annotations are **labels** 🏷️ for your variables → they tell TypeScript exactly what kind of value is allowed.
