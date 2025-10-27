
## Day 3 - Type Assignment & Type Inference

### 1. Explicit Type Assignment

TypeScript allows developers to **explicitly specify a data type** for variables and function parameters.

#### A. Typing Function Parameters

By explicitly defining the expected type for function parameters, TypeScript enforces type safety.

*   **Necessity of Typing:** If parameters are not explicitly typed (e.g., `num1` and `num2` in a `sum` function), the function can accept any type of value, potentially leading to bugs or unexpected results.
    *   *Example:* Passing a string (`'12'`) and a number (`13`) to an untyped function results in the concatenation of string values (`'1213'`), rather than addition, because the number is converted to a string.
*   **Applying Types:** To restrict parameters to a specific type, such as `number`, the type can be explicitly assigned (e.g., `num1: number`).
*   **Type Checking:** Explicit typing ensures that if a value of an incorrect type (e.g., a string instead of a number) is passed, a **compile-time error** will occur. This is a major advantage of using TypeScript, as it helps identify bugs and issues that might otherwise be introduced into the code.
*   *Other Examples:* Function parameters can also be explicitly typed as `boolean` (e.g., `isPrint: boolean`) or `string` (e.g., `message: string`).

#### B. Typing Variables

Variables can also be explicitly assigned a data type (e.g., `let N1: number = 10`).

### 2. Type Inference

While explicit typing is an option, TypeScript can often determine the type automatically.

*   **Definition:** **Type inference** occurs when a value is assigned to a variable; the data type of that variable is **automatically inferred and set** based on the value with which it was initialized.
*   **How it Works:**
    *   If a variable `N1` is initialized with the numeric value `10`, its data type is inferred as `number`.
    *   If a variable `St` is assigned the string value `"hello"`, its data type is inferred and set to `string`.
*   **Usage:** Explicitly specifying the data type of a variable is generally **not necessary** because TypeScript handles type inference.

### 3. TypeScript vs. JavaScript Typing

The mechanism of type inference highlights the difference between how TypeScript and JavaScript handle data types.

| Feature | TypeScript (Strongly Typed) | JavaScript (Dynamically Typed) |
| :--- | :--- | :--- |
| **Typing Model** | **Strongly typed**. | **Dynamically typed**. |
| **Type Reassignment** | Once a variable's data type is inferred and set, **it cannot be changed later** in the program. | The data type of a variable can change based on what value is currently being stored in it. |
| **Assignment Error** | Assigning a different type of value (e.g., a string or boolean) to a variable whose type has already been set (e.g., `number`) will **throw an error**. | A variable initialized with a number can later be assigned a string value without receiving an error. |
| **Type Checking** | Bugs/issues can be identified through compile-time errors. | If numeric values are required for input, a developer must implement manual checks (e.g., `if/else` statements, data sanitization). |

In TypeScript, a variable must always store the same type of value in that variable once its type is set.
