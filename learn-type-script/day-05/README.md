## Day 5 Arrays in TypeScript

Arrays in TypeScript are fundamentally a **collection of values**. They are created using **square brackets** (`[]`), similar to JavaScript.

### I. Implicit Array Typing (Type Inference)

TypeScript uses type inference to determine the type of an array based on the values assigned during initialization.

#### 1. Single-Type Arrays
When an array is initialized with values of only one data type, TypeScript infers the array type as an array of that specific data type.

| Concept | Example | Inferred Type | Constraint |
| :--- | :--- | :--- | :--- |
| **String Array** | `let names = ["John", "Jane"];` | `string[]` (Array of strings) | Can only store string values. |
| **Number Array** | `let birthYear = [2002,2004];` | `number[]` (Array of numbers) | Cannot insert a string value; attempting to do so results in an error. |

#### 2. Mixed-Type Arrays (Union Types)
If an array is initialized with values of different types (e.g., string and number), TypeScript infers the array type as a **Union Type** (`|`) of all included types.

| Concept | Example | Inferred Type | Constraint |
| :--- | :--- | :--- | :--- |
| **String and Number** | `let person = ["John", 28, 1000];` | `(string | number)[]` | Can store values of type `string` or `number`. Attempting to push a `Boolean` value (like `true`) results in an error. |
| **String, Number, and Boolean** | `let mixedArray = ["test", 5, true];` | `(string | number | boolean)[]` | The type includes all types present during initialization. |

### II. Explicitly Specifying Array Types

Developers can explicitly set the type of an array using a colon (`:`) followed by the data type and square brackets.

#### 1. Syntax for Single Type Arrays
The required data type is specified, followed by `[]` to denote that the variable is an array of that type.

**Syntax:**
```typescript
let variableName: dataType[];
```

**Examples:**
*   To create an array that can only store string values:
    ```typescript
    let names: string[];
    // or
    let names: string[] = []; // Initializing with an empty array to avoid 'used before assigned' error
    ```
*   To create an array that can only store numeric values:
    ```typescript
    let birthYear: number[]; // Specifies number data type followed by square brackets
    ```

#### 2. Syntax for Explicit Union Type Arrays
When explicitly defining an array that can store multiple types, the types must be enclosed in parentheses, separated by the pipe symbol (`|`), followed by the array brackets `[]`. The pipe symbol (`|`) is used for the **Union Type**.

**Syntax:**
```typescript
let variableName: (dataType1 | dataType2)[];
```

**Example:**
*   To define an array that can only store string or number values:
    ```typescript
    let person: (string | number)[];
    // This tells TypeScript the variable is an array [] that stores values of either string type OR number type.
    ```
    *Note:* If the initialized array contains a type (like boolean) that is not included in the explicit union type definition, TypeScript will throw an error.

### III. Working with Array Elements

#### 1. Adding Elements (Mutation)
The `push` method is used to add new elements to the end of an array.

**Example:**
```typescript
let names: string[] = []; // Must be string array
names.push("John"); // Pushing a string value
// names.push(10); // Error: Cannot insert a numeric value because names is of type string[]
```

#### 2. Accessing Elements
Elements are accessed using their **index**, starting at `0`, just like in JavaScript.

**Syntax:**
```typescript
arrayName[index];
```

**Example:**
```typescript
// Assuming names array has "John" at index 0
console.log(names); // Output: John

// Accessing the second element (index 1) of the birthYear array
// birthYear = 
console.log(birthYear); // Output: 1989

// If an element does not exist at the specified index, it logs undefined.
```

#### 3. Looping Over Elements
The **`for...of` loop** can be used to iterate over each element in an array.

**Syntax:**
```typescript
for (let variableName of arrayName) {
    // code to execute for each element
}
```

**Example:**
```typescript
let birthYear = ;
for (let year of birthYear) {
    console.log(year); // Logs 1998, then 1989, then 2007
}
```
