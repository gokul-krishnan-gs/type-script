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

Based on the sources provided, here are the complete notes detailing the installation and basic usage of TypeScript:

***

## Installing and Using TypeScript

### I. Understanding the Need for Installation

*   TypeScript code **needs to be compiled to JavaScript** in order to be executed in JavaScript environments, such as a browser or Node.js.
*   When TypeScript is installed, it also installs the **TypeScript compiler** (which converts TypeScript code to JavaScript) and all other dependencies required for TypeScript to work properly.

### II. Installing Node.js (Prerequisite)

*   To install TypeScript using the Node Package Manager (`npm`), **Node.js** must be installed first.
*   Installing Node.js automatically installs the **Node Package Manager (npm)**.
*   `npm` is necessary because it is used to install or uninstall packages from the npm registry (like TypeScript).
*   **Installation Steps:**
    1.  Go to **`nodejs.org`**.
    2.  Download the latest version.
    3.  Run the downloaded installer and follow the installation steps.
*   **Verifying npm Installation:**
    1.  Open the Command Prompt (Windows) or Terminal (Mac).
    2.  Type **`npm --version`** and press enter; seeing a version number confirms npm is installed.

### III. Global TypeScript Installation

*   The installation steps for TypeScript can be found on **`typescriptlang.org`**.
*   To install TypeScript globally in the machine, the following `npm` command is used:
    *   **`npm install -g typescript`**
*   **Key Command Components:**
    *   `npm install` is used to install a package from npm.
    *   The **`-g`** flag specifies that the package should be installed **globally**.
    *   This process installs the TypeScript package, including the TypeScript compiler, globally.

### IV. Project Setup and Writing TypeScript

*   The process uses a startup project containing `index.html` and `style.css` (the link to which is available in the description).
*   The project can be run using a live development server (e.g., using Live Server in VS Code).
*   **Creating a TypeScript File:**
    *   A new file is created, typically called **`app.ts`**.
    *   The extension for any TypeScript file is **`.TS`**.
*   Basic TypeScript code, such as a `console.log` statement (e.g., `console.log("hello world")`), can be written inside the `.TS` file.

### V. Compiling and Executing TypeScript

*   To run the code, the TypeScript file must first be compiled.
*   **Compilation Steps:**
    1.  Open the Terminal (VS Code) or Command Prompt.
    2.  Navigate to the project folder using the **`CD`** command.
    3.  Run the TypeScript compiler command: **`TSC app.TS`**.
        *   **`TSC`** stands for **TypeScript Compiler**.
    4.  Upon successful compilation, a new JavaScript file with the same name, **`app.js`**, is created in the project folder.
*   **Execution in Browser:**
    *   Browsers only understand **JavaScript**; they do not understand TypeScript.
    *   The **`index.html`** file must include a script tag that links to the **compiled JavaScript file (`app.js`)**, not the TypeScript file (`app.ts`).
    *   Example script tag: `<script src="app.js"></script>`.
*   **Updating Code:**
    *   If changes are made to the `app.ts` file (e.g., changing the message displayed), the compilation command (`TSC app.TS`) must be run again.
    *   The compiler updates the content of the existing `app.js` file with the new JavaScript code derived from the updated TypeScript.
