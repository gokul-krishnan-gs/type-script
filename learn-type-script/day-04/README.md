## Day 4

The `object` data type in TypeScript shares similarities with JavaScript objects but implements stricter type checking. Objects are created using key-value pairs, such as defining a `person` variable with `name` and `age` properties.

### 1. Type Inference in TypeScript Objects

When an object variable is initialized, TypeScript performs **type inference** to determine its structure.

*   **Inferred Type Definition:** The inferred type specifies that the variable must be an object containing specific **properties** (keys) and that those properties must store specific **data types** (values).
    *   *Example:* If initialized with `{name: 'John', age: 30}`, the inferred type is an object where `name` must be a `string` and `age` must be a `number`.
*   **Strict Structural Matching:** When reassigning the variable later, the new object must match the inferred type structure.
    *   If a new object is assigned that includes an **extra property** (e.g., `gender`) that was not part of the initial inferred type, TypeScript generates an error, stating the property "does not exist in type" (it is not a known property).
    *   If the type of a property's value is changed during reassignment (e.g., changing `age` from a number to a string), an error occurs because the assigned string value is "not assignable to type number".

### 2. Explicit Type Annotation for Objects

While TypeScript handles type inference automatically, developers can also explicitly specify the expected object type.

#### A. Specific Structure Definition

To define the exact structure of objects allowed for a variable, use curly braces following the variable name and colon, listing required properties and their types, separated by semicolons:

```typescript
let person: { propertyName: type; anotherProperty: type; }
```

*   **Structure:** For instance, `person` can be defined as `{ name: string; age: number; }`.
*   Only objects matching this specific structure (containing exactly `name` (string) and `age` (number)) can be assigned to the variable without error.

#### B. Looser Object Type (`object` or `{}`)

If the type is explicitly specified simply as `object` or by using empty curly braces `{}`:

*   **Assignment:** The variable can be reassigned with objects having different sets of properties (e.g., one object having `name`, `age`, and `gender`, followed by another object having only `name` and `age`) without assignment errors.
*   **Property Access Restriction (Important Note):** When the type is set to the generalized `object` or `{}`, TypeScript does not know what specific properties the object will contain.
    *   Attempting to access **any** specific property (even `name`) will result in an error because TypeScript cannot guarantee that property exists on the generalized type.

### 3. Property Access and Error Handling

TypeScript provides strong checking when accessing properties on objects with inferred types.

*   **Valid Access:** Accessing a known property (inferred or explicitly defined) is done using dot notation (e.g., `person.name`).
*   **Invalid Access (TypeScript Error):** If a developer attempts to access a property that does not exist on the object's inferred type (e.g., `person.gender`), TypeScript will generate an error both in the editor and during compilation.
    *   **JavaScript Behavior:** In contrast, JavaScript does not throw an error for accessing non-existent properties; it logs `undefined`. TypeScript code with such an error will still compile successfully into JavaScript, and the JavaScript output will log `undefined` when executed.
*   **Bracket Notation:** Property values can also be accessed using square bracket notation (e.g., `person['age']`) in TypeScript.

### 4. Handling Nested Objects

When an object contains another object (a nested object, like an `address` property):

*   **Explicit Type Definition:** The explicit type definition must include the nested structure.
*   The property holding the nested object is defined using another set of curly braces, specifying the properties and types of the inner object.

```typescript
// Explicit type for an object with a nested 'address' object
{ name: string; age: number; address: { city: string; country: string; } }
```
This structure ensures that the assigned object matches the expected types for all inner and outer properties.
