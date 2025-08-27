# 📖 Enums in TypeScript

## 🧒 Kid-like Explanation

Imagine you have a box of crayons 🖍️.
👉 Each crayon has a **name** ("Red", "Blue", "Green").
👉 But you also give them **numbers** (0, 1, 2).

Now, instead of remembering "Red = 0", "Blue = 1", you just use the **enum** like a **label system**.

## ✅ Definition

An **enum (enumeration)** is a special type in TypeScript that lets you define a group of **named constants** (values that don't change).

## ✅ Syntax

```typescript
enum EnumName {
  KEY1,
  KEY2,
  KEY3
}
```

## ✨ Types of Enums

### 1. **Numeric Enums (default)**

Values start from **0 by default**.

```typescript
enum Direction {
  Up,     // 0
  Down,   // 1
  Left,   // 2
  Right   // 3
}

console.log(Direction.Up);    // 0
console.log(Direction.Left);  // 2
```

### 2. **Custom Numeric Enums**

You can set starting values.

```typescript
enum Status {
  Success = 1,
  Failure = -1,
  Pending = 0
}

console.log(Status.Success); // 1
console.log(Status.Pending); // 0
```

### 3. **String Enums**

Each key maps to a string.

```typescript
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

console.log(Colors.Red);   // "RED"
```

### 4. **Mixed Enums (rare, but possible)**

```typescript
enum Mixed {
  Yes = 1,
  No = "NO"
}
```

## ✅ Example in Real Life

```typescript
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

function login(role: Role) {
  if (role === Role.Admin) {
    console.log("Welcome, Admin 👑");
  } else if (role === Role.User) {
    console.log("Hello User 👋");
  } else {
    console.log("Welcome Guest 🙌");
  }
}

login(Role.Admin); // Welcome, Admin 👑
login(Role.User);  // Hello User 👋
```

## ⭐ Standout Points

* ✅ Enums group related constants under one name.
* ✅ Numeric enums (default: start from 0).
* ✅ String enums give readable values.
* ✅ Can be used in **conditions, switches, and roles**.
* ✅ More **organized & safe** than using just strings/numbers.
