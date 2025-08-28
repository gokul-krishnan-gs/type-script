# 📖 Access Modifiers in TypeScript

## 🧒 Kid-like Explanation

Think of a **treasure chest 🗝️**.
* `public` → anyone can open it.
* `private` → only the owner has the key.
* `protected` → only the family (class + children) can open it.

## ✅ Definition

**Access Modifiers** control **who can access** the properties and methods of a class.

## ✅ Types of Access Modifiers

### 1. **public** (default)
* Accessible from **anywhere**.

```typescript
class Car {
  public brand: string; // public by default

  constructor(brand: string) {
    this.brand = brand;
  }
}

const c1 = new Car("Tesla");
console.log(c1.brand); // ✅ Accessible
```

### 2. **private**
* Accessible **only inside the class**.

```typescript
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance; // ✅ Allowed inside
  }
}

const acc = new BankAccount(1000);
// console.log(acc.balance); ❌ Error
console.log(acc.getBalance()); // ✅ 1000
```

### 3. **protected**
* Accessible inside the class **and subclasses (child classes)**.

```typescript
class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  showSalary() {
    return this.salary; // ✅ Accessible inside child
  }
}

const m1 = new Manager(50000);
// console.log(m1.salary); ❌ Error
console.log(m1.showSalary()); // ✅ 50000
```

# 📖 Getters and Setters

## 🧒 Kid-like Explanation

Think of a **vending machine 🍫**:
* **Getter** → you take something out.
* **Setter** → you put something in.

## ✅ Definition

* **Getter** (`get`) → reads a private/protected property safely.
* **Setter** (`set`) → updates a private/protected property safely.

## ✅ Syntax

```typescript
class ClassName {
  private _property: type;

  constructor(value: type) {
    this._property = value;
  }

  get propertyName(): type {
    return this._property;
  }

  set propertyName(value: type) {
    this._property = value;
  }
}
```

## ✅ Example

```typescript
class User {
  private _password: string;

  constructor(password: string) {
    this._password = password;
  }

  // Getter
  get password(): string {
    return this._password;
  }

  // Setter
  set password(newPassword: string) {
    if (newPassword.length < 6) {
      console.log("❌ Password too short!");
    } else {
      this._password = newPassword;
      console.log("✅ Password updated!");
    }
  }
}

const user1 = new User("secret123");

console.log(user1.password); // ✅ secret123

user1.password = "123";      // ❌ Too short
user1.password = "newPass";  // ✅ Updated
console.log(user1.password); // ✅ newPass
```

## ⭐ Standout Points

* ✅ **Access Modifiers**:
  * `public` → everywhere
  * `private` → only inside class
  * `protected` → inside class + subclasses
* ✅ Getters/Setters:
  * Use `get` to read private data.
  * Use `set` to update private data with conditions.
* ✅ Common in real-world → hiding sensitive info (like password, salary, balance).
