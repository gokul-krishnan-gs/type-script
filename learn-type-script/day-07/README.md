

## Day 7  - Enums

### 1. Definition and Purpose

*   TypeScript has an **`enum` type**, which is a feature **not present in JavaScript**.
*   An enum is essentially a **collection of named values**.
*   The use of enums provides an alternative to creating separate constants (variables) for each possible role or type, which can be done using integer or string values in standard practice.

### 2. Enum Creation and Syntax

*   The keyword used to create an enum is **`enum`**.
*   Syntax involves the `enum` keyword, followed by a name (e.g., `Roles`), and then a set of curly braces `{}`.
*   **Crucial Note:** An enum structure is **not an object**.
*   Named values are listed inside the curly braces without being enclosed in quotes (e.g., `admin`, `read only`, `write only`, `read write`).

**Example of Enum Structure:**
```typescript
enum Roles {
    admin,
    read only,
    write only,
    read write
}
```


### 3. Enum Values (Default Behavior)

*   By default, the value of each named item in an enum will be an **integer value**.
*   The default starting value is **zero (0)**.
*   If no values are explicitly assigned:
    *   `admin` will be **0**.
    *   `read only` will be **1**.
    *   `write only` will be **2**.
    *   `read write` will be **3**.

### 4. Explicitly Setting Enum Values

Enums allow developers to explicitly set values instead of using the default sequential integers.

*   **Customizing the Start Value:** If the first named value is set explicitly (e.g., `admin = 1`), the following values will increment by one relative to the previous value (e.g., `read only` will be 2, `right only` will be 3, etc.).
*   **Setting Arbitrary Values:** Different explicit values can be specified for different roles (e.g., `admin = 100`, `read only = 200`, `right only = 300`).
*   **Incremental Behavior Continues:** If a named value is left unassigned after an explicitly assigned value, it will be assigned the value of the previous element plus one (e.g., if `right only` is 300, then `read write` will be 301).
*   **Non-Numeric Values:** Enums are **not limited to numbers**; string values can also be assigned. It is also possible to have a **mix of string and number** values within the same enum.

### 5. Usage in Code

Enums are used to assign roles and to compare them.

*   **Assigning a Role:** An enum value can be assigned to a property (e.g., `user.role = Roles.admin`).
    *   In the default numerical case, assigning `Roles.admin` assigns the value **0** to the property.
*   **Comparing a Role:** Enums simplify checking the value of a role (e.g., `if (user.role === Roles.admin)`).

### 6. Compilation to JavaScript

*   Since JavaScript does not have the `enum` type, TypeScript must compile the enum code into standard JavaScript.
*   The compilation process converts the enum definition into a complex JavaScript structure, often using an **Immediately Invoked Function Expression (IIFE)**.
*   The compiled JavaScript code required to achieve the same functionality as a simple TypeScript enum is significantly more complex to write manually.
