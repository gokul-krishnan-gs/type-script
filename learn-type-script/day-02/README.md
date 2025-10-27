

## Day 2 : Variables in TypeScript

### I. Definition and Purpose of Variables

Variables are a fundamental concept in any programming language. A variable functions as a **named storage** where a value can be stored. This named storage can be used repeatedly throughout the code, which avoids rewriting the value every time it is needed.

### II. Creating Variables

In TypeScript, variables are created using either the `let` or `const` keywords, similar to JavaScript.

*   **Using `let`
*   **Using `const`

### III. Differences Between `let` and `const`

The primary differences between `let` and `const` relate to initialization requirements and mutability (whether the value can be changed later).

| Feature | `let` Keyword | `const` Keyword |
| :--- | :--- | :--- |
| **Initialization** | Does not need to be initialized immediately. A variable can be declared without a value and initialized at a later point in time. | **Must be initialized immediately**. A `const` declaration without initialization will throw an error: "const declaration must be initialized". |
| **Value Change (Mutability)** | The value can be changed (reassigned) at a later point. For example, a variable initialized with 100 can later be reassigned to 1000 without error. | The variable is **constant** and its value cannot be changed after initialization. Attempting to change its value will result in an error: "cannot assign to [variable name] because it is a constant". |
| **Usage** | Use when the variable's value might change in the future. | Use when the variable's value will never change throughout the entire program. |

### IV. TypeScript Type Inference and Strong Typing

A crucial aspect of TypeScript variables is how data types are handled.

1.  **Type Inference:** A variable's **data type is inferred at the time of initialization** based on the value assigned to it.
    *   Example: If `num` is assigned `100` (a numeric value), its inferred type is `number`.

2.  **Strong Typing:** TypeScript is **strongly typed**, unlike JavaScript, which is dynamically typed.
    *   Once a variable's data type is determined, it **cannot be changed** throughout the program.
    *   This means that only values of the inferred type (e.g., only numbers for a variable inferred as `number`) can be stored in that variable.
    *   Attempting to assign a value of a different type (e.g., assigning a Boolean value like `true` to a variable inferred as `number`) will result in an error, stating that the new type is "not assignable to type number".

3.  **Contrast with JavaScript:** In dynamically typed JavaScript, a variable's data type can change based on the new value stored in it later on.

### V. Rules for Naming Variables

When creating a variable name, five rules must be followed:

1.  **Allowed Characters:** A variable name can **only contain** letters, digits, underscore (`_`), and the dollar sign (`$`). Characters like hyphens (`-`) or percentage signs (`%`) are not allowed.
2.  **Starting Character Restriction:** The first character of a variable name **must not be a digit** (number). For example, `1name` is not a valid variable name.
3.  **Allowed Starting Characters:** A variable name **can start with a letter, an underscore, or a dollar sign**.
4.  **Case Sensitivity:** TypeScript variable names are **case sensitive**. For example, a variable named `num` (lowercase 'n') is completely different from a variable named `Num` (uppercase 'N').
5.  **Reserved Keywords:** You **cannot use TypeScript reserved keywords** as variable names. Examples of reserved keywords include `class`, `if`, and `while`.
