## DAY 6
### 1. Definition and Comparison

*   **Tuples** are a new data type introduced in TypeScript that do not exist in JavaScript.
*   A TypeScript tuple is defined as a **fixed length ordered collection of elements**.
*   Crucially, in a tuple, **each element has a specific type**.
*   This explicit definition of types for values stored in each position ensures **type safety and clarity** in the code.
*   A tuple is essentially an array.
*   **Compilation:** A tuple created in TypeScript gets compiled to a standard **array in JavaScript**.

### 2. Syntax and Structure

*   To create a tuple, you must explicitly define the type after the variable name.
*   Since a tuple is like an array, the type specification uses a set of square brackets (`[]`).
*   Inside the brackets, you specify the data type for **each element** in the precise order they appear.
*   *Example:* For an `employee` record needing an ID (number), Name (string), Salary (number), and Permanent status (boolean), the type definition would be: `[number, string, number, boolean]`.
*   The number of data types specified defines the **fixed length** of the tuple (e.g., specifying four data types means the tuple length is four).

### 3. Array Inference vs. Tuple Definition

*   If an array is created without explicit type definition (e.g., `let employee = [123, "John", 2000, true]`), TypeScript infers the type as a flexible array that can store values of type string, number, or boolean (i.e., `(string | number | boolean)[]`).
*   A tuple is used specifically when restrictions are needed, such as ensuring it holds exactly four values and the elements adhere to a strict order of types (e.g., first must be a number, second a string, etc.).

### 4. Enforcement of Strictness (Benefits and Errors)

The main advantage of using a tuple over a standard array is the ability to enforce strictness.

*   **Fixed Length Enforcement:**
    *   If an array is assigned to a tuple where the length of the array is different from the defined tuple length, an error will occur.
    *   *Error Example 1 (Too Many Elements):* If a fifth element is assigned to a four-element tuple, the error states the source has five elements but the target allows only four elements.
    *   *Error Example 2 (Too Few Elements):* If an array with only three elements is assigned to a four-element tuple, the error states the source has only three elements but the target requires four.

*   **Type Enforcement by Position:**
    *   The type of value stored in each specific position is enforced.
    *   If you specify the first element must be a `number` but attempt to assign a `Boolean` value or a `string` value, an error will occur (e.g., "Boolean is not assignable to type number").

### 5. Exception: The `push` Method

*   While tuples enforce a fixed length during assignment, using the **`push` method** on a tuple is an **exception**.
*   If a tuple already has its required number of elements (e.g., four) and the `push` method is called to add a fifth element, **no error is generated**.
*   The code will compile successfully, and the resulting JavaScript array will contain the pushed element.
*   This behavior with the `push` method is crucial to remember when working with tuples. In all other cases (e.g., direct assignment of an array literal), length enforcement works as expected.
