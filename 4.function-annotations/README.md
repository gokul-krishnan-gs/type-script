# 📖 Function Annotations in TypeScript

## 🧒 Kid-like Explanation

Think of a function like a **vending machine** 🍫:
* **Parameters** = coins you put in.
* **Return value** = chocolate that comes out.
* **Annotations** = stickers on the machine telling what kind of coins are accepted and what chocolate comes out.

## 1. **Parameter Annotations**

You can tell TypeScript what type each parameter should be.

### ✅ Syntax

```typescript
function functionName(paramName: type): returnType {
  // code
}
```

### ✅ Example

```typescript
function greet(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}
```

## 2. **Default Parameter Values**

You can give a **default value** → if no argument is passed, the default is used.

### ✅ Example

```typescript
function welcome(name: string = "Guest"): string {
  return `Welcome, ${name}!`;
}

console.log(welcome());        // "Welcome, Guest!"
console.log(welcome("Gokul")); // "Welcome, Gokul!"
```

TypeScript **infers the type** from the default value.

## 3. **Return Type Annotations**

You can explicitly tell what type the function will return.

### ✅ Example

```typescript
function add(a: number, b: number): number {
  return a + b;  // must return number
}
```

If return type doesn't match → **TypeScript error**.

## 4. **Void in TypeScript / JavaScript**

### 🧒 Kid Explanation
If you tell a machine to **just sing a song 🎶** but **not give chocolate**, that's `void`.

### 📚 Definition
* `void` means **this function doesn't return any useful value**.
* Common for functions that **only perform an action** (logging, printing, updating something).

### ✅ Example

```typescript
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello!"); // prints message, but returns nothing
```

⚡ In **JavaScript** itself, if a function has no return statement → it returns `undefined`. TypeScript uses `void` to represent this behavior.

## ⭐ Standout Points

* Always annotate **parameters** for clarity.
* Use **default parameters** to avoid `undefined` issues.
* **Return type annotation** helps avoid mistakes.
* `void` = "no return value" (just side effects).
