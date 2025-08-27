# 📖 Objects in TypeScript

## 🧒 Kid-like Explanation

Think of an **object** like a **toy box 🧸**.
* Each toy has a **name (key)** and the **actual toy (value)**.
* TypeScript makes sure each toy is in the **correct slot**.

## 1. **What is an Object?**

* An **object** is a collection of **key–value pairs**.
* Keys are usually **strings** (or numbers), and values can be **any type**.
* In TypeScript, we define the **type of keys and values** before creating the object.

## 2. **Defining Object Types**

### ✅ Inline Type

```typescript
let person: { name: string; age: number } = {
  name: "Gokul",
  age: 21,
};
```

### ✅ Using `type` Alias

```typescript
type Person = {
  name: string;
  age: number;
};

let user: Person = {
  name: "Krishnan",
  age: 25,
};
```

### ✅ Using `interface`

```typescript
interface Car {
  brand: string;
  year: number;
}

let myCar: Car = {
  brand: "Toyota",
  year: 2022,
};
```

## 3. **Optional Properties** (`?`)

Not every key is required.

```typescript
type Student = {
  name: string;
  grade?: number; // optional
};

let s1: Student = { name: "Ravi" }; // ✅ grade not required
```

## 4. **Readonly Properties**

Key cannot be changed after creation.

```typescript
type Book = {
  readonly title: string;
  pages: number;
};

let b: Book = { title: "TS Handbook", pages: 100 };
// b.title = "New Title"; ❌ Error
```

## 5. **Nested Objects**

Objects inside objects.

```typescript
type Address = {
  city: string;
  pincode: number;
};

type Employee = {
  name: string;
  address: Address;
};

let emp: Employee = {
  name: "Gokul",
  address: {
    city: "Kochi",
    pincode: 682001,
  },
};
```

## 6. **Index Signatures (Dynamic Keys)**

For unknown/dynamic keys.

```typescript
type Scores = {
  [subject: string]: number;
};

let marks: Scores = {
  math: 95,
  science: 88,
};
```

## ⭐ Standout Points

* Define objects with **inline type**, `type`, or `interface`.
* Use `?` for **optional properties**.
* Use `readonly` for **immutable keys**.
* Objects can be **nested** and **dynamic** with index signatures.
