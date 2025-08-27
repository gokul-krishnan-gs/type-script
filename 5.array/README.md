# 📖 Arrays in TypeScript

## 🧒 Kid-like Explanation

Think of an **array** like an **egg tray 🥚🥚🥚**.
* Each egg slot = position (index).
* The tray only holds **one type of egg** if we say so (like only brown eggs = `number[]`).
* If we mix eggs (brown + white) → then it's a **union type array**.

## 1. **What is an Array?**

* An **array** is a collection of values stored in a single variable.
* In TypeScript, arrays have **types**, so TS knows what can and can't be inside.

## 2. **Ways to Declare Array Types**

### ✅ Using `type[]`

```typescript
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Gokul", "Krishnan"];
```

### ✅ Using `Array<type>` (generic style)

```typescript
let numbers: Array<number> = [10, 20, 30];
let flags: Array<boolean> = [true, false, true];
```

👉 Both are the same. `number[]` is shorter, `Array<number>` is more explicit.

## 3. **Union Type Arrays (Mixed Types)**

```typescript
let mix: (string | number)[] = [1, "two", 3];
```

## 4. **Readonly Arrays** (cannot change values)

```typescript
let arr: readonly number[] = [1, 2, 3];
// arr.push(4); ❌ Error
```

## 5. **Multidimensional Arrays**

An array inside another array (like a matrix 📊).

### ✅ Example: 2D Array (Matrix)

```typescript
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

👉 `number[][]` means → array of arrays of numbers.

### ✅ Example: 3D Array (Cube 🎲)

```typescript
let cube: number[][][] = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
```

## ⭐ Standout Points

* Two main syntaxes: `number[]` and `Array<number>`.
* Arrays can be strict (only one type) or unions (multiple allowed).
* Use `readonly` when you don't want changes.
* Multidimensional arrays are just **arrays of arrays**.
