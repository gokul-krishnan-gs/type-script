# 📖 Type Inference in TypeScript

## 🧒 Kid-like Explanation

Imagine you're drawing 🎨 and you pick a **red crayon**. Even if you don't **say out loud** "This is red," everyone **knows** it's red.

👉 Similarly, in TypeScript, if you **give a value**, it can **guess the type automatically** — that's **type inference**.

## 📚 Definition

* **Type Inference** means **TypeScript automatically figures out the type of a variable, function, or expression** without you explicitly writing it.
* It uses the **initial value (initializer)** or **context** to decide the type.

## 📝 Examples

### 1. Simple Variable

```typescript
let age = 21;  
// TypeScript infers: age is number
```

### 2. String

```typescript
let name = "Gokul";  
// inferred: string
```

### 3. Boolean

```typescript
let isAdmin = false;  
// inferred: boolean
```

### 4. Arrays

```typescript
let scores = [10, 20, 30];  
// inferred: number[]
```

```typescript
let mix = [1, "two", true];  
// inferred: (string | number | boolean)[]
```

### 5. Function Return Type

```typescript
function add(x: number, y: number) {
  return x + y;
}
// return type inferred: number
```

### 6. No Initial Value → `any`

```typescript
let something;  
// inferred: any (dangerous)
something = "hello";
something = 42; // allowed
```

## ⭐ Standout Points

* 🟢 **Good practice:** Rely on inference for **simple cases** (`let age = 20;`).
* 🟢 TypeScript is smart enough to infer from **expressions** (like function returns).
* 🔴 **Bad practice:** Declaring variables without values (becomes `any`).
* 🟢 Add explicit types when:
   * The value is **not known immediately**.
   * Code needs to be **more readable** for teams.

## ⚡ In Short

**Type Inference = TypeScript guessing the type for you** 🎯. You don't always need to write `: type`, TS is smart enough in most cases.
