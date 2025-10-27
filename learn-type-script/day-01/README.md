# Day 1 - Introduction to TypeScript

### 1. Definition and Relationship to JavaScript

*   **TypeScript is a superset of JavaScript**.
*   It is a programming language **built up on JavaScript**.
*   TypeScript includes all the features that JavaScript provides, along with **extra features**.
*   It aims to produce code that is **less error-prone and cleaner** than standard JavaScript.
*   It makes writing JavaScript easier and **more powerful**.
*   Features like **interfaces and access modifiers** are available in TypeScript but are currently not available in the latest version of JavaScript.
*   Basic JavaScript knowledge is sufficient to begin learning TypeScript.

### 2. Execution and the TypeScript Compiler

*   TypeScript code cannot be executed directly by JavaScript runtimes, such as the **browser or Node.js environment**.
*   TypeScript is not only a programming language but also a **powerful compiler**.
*   The execution process involves an extra step: when TypeScript code is run, the compiler converts or **compiles it into standard JavaScript code**.
*   The resulting JavaScript code can then be executed by the JavaScript runtime (browser or Node.js).
*   The compiler handles new TypeScript features by using **workarounds** in existing JavaScript logic. For example, a nice and simple piece of code in TypeScript using new features might be converted into complex JavaScript logic and syntax to achieve the same result.
*   The compiler ensures that the output JavaScript code uses existing JavaScript features because JavaScript does not support features not available to it.

### 3. Key Advantage: Strong Typing

A very important feature of TypeScript that distinguishes it from JavaScript is its approach to data types:

| Feature | TypeScript (Strongly Typed) | JavaScript (Dynamically Typed) |
| :--- | :--- | :--- |
| **Type Definition** | Allows you to **explicitly specify a type** for a variable (e.g., defining `num` as only storing a numeric value). | Does **not** allow specification of a data type for a variable or parameter. |
| **Type Calculation** | Data type is set upon initialization (or explicitly defined). | Data type is calculated based on the value currently stored in it. |
| **Type Change** | If a variable's data type is set (e.g., to `number`), attempting to assign a value of a different type (e.g., a string) later will result in an **error**. | A variable's data type **can change** based on the type of value being stored in it later in the code (e.g., changing from a number to a string). |

#### Benefits of Strong Typing

*   Strong typing provides an opportunity to **identify errors and fix bugs earlier** in the development stage, specifically before the code is run and compiled.
*   **Example of Error Avoidance:** In JavaScript, if a function expects two numbers but receives two strings (e.g., '3' and '5'), using the `+` operator results in concatenation ("35") instead of the expected arithmetic addition (8), leading to an unexpected result. In TypeScript, the function parameters can be explicitly specified as numeric values. If a user tries to pass a string or boolean, an error is immediately generated, which helps in rectifying the issue and avoiding the bug.

### 4. Other Advantages

*   TypeScript provides **extra features** beyond JavaScript, which makes writing certain logics easier and simpler. Without these features, writing the same complex code might be more difficult.
*   It includes **meta features** like **decorators**.
*   TypeScript is **highly configurable**. Developers can fine-tune the TypeScript compiler to meet their specific requirements.

### 5. The Disadvantage

*   The **only disadvantage** of using TypeScript is that it requires **one extra step** of compiling the TypeScript code to JavaScript before it can be executed by the JavaScript runtime.

