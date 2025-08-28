# 📖 TypeScript Compilation Process

## 🧒 Kid-like Explanation

Think of **TypeScript as a translator + teacher**:

1. **Teacher (Type Checker)**: "Hey, your sentence has a grammar mistake" (type error).
2. **Translator (Transpiler)**: Converts your fancy TypeScript (TS) into plain old JavaScript (JS) so browsers can understand it.

👉 Even if you make a grammar mistake, the translator will **still produce JavaScript**, but the teacher will warn you.

## ✅ Definition

* **Type Checking** → TypeScript checks code for type safety (but does not stop compilation by default).
* **Transpiling** → Converting TypeScript (`.ts`) into JavaScript (`.js`) that browsers/Node.js can run.

## 🔄 Compilation Flow

```
Your .ts code  ──> Type Checker ──> Errors/Warnings
                   │
                   ▼
                 Transpiler ──> Output .js (and maybe .d.ts files)
```

## 🛠️ Step 1: Install TypeScript

```bash
npm install -g typescript
```

Check version:

```bash
tsc -v
```

## 🛠️ Step 2: Compile a Single File

```bash
tsc index.ts
```

* Generates `index.js` in the same folder.
* If errors exist → shows in terminal, but still produces JS (unless `--noEmitOnError` is set).

👉 Example:

**index.ts**

```typescript
let age: number = "22"; // ❌ Type error
console.log(age);
```

**Compile**

```bash
tsc index.ts
```

**Terminal Output**

```
index.ts:1:5 - error TS2322: Type 'string' is not assignable to type 'number'.
```

**index.js (still produced)**

```javascript
let age = "22";
console.log(age);
```

## 🛠️ Step 3: Watch Mode

👉 Auto recompile on file save:

```bash
tsc index.ts --watch
```

## 🛠️ Step 4: Project Setup with `tsconfig.json`

Initialize config:

```bash
tsc --init
```

This creates `tsconfig.json` → controls how TS compiles.

Example important settings:

```json
{
  "compilerOptions": {
    "target": "ES6",           
    "module": "commonjs",      
    "outDir": "./dist",        
    "rootDir": "./src",        
    "strict": true,            
    "noEmitOnError": true      
  }
}
```

👉 Meaning:
* **target** → Which JS version to output.
* **outDir** → Where JS files go.
* **rootDir** → Where TS files are stored.
* **strict** → Strict type checking.
* **noEmitOnError** → Don't produce JS if errors exist.

## 🛠️ Step 5: Compile Whole Project

```bash
tsc
```

* Reads `tsconfig.json`.
* Compiles everything in `rootDir`.
* Puts output in `outDir`.

## 🛠️ Step 6: Output Flow Example

📂 **src/index.ts**

```typescript
let username: string = "Gokul";
let age: number = 22;

console.log(username.toUpperCase());
console.log(age + 5);
```

📂 **dist/index.js** (after `tsc`)

```javascript
"use strict";
let username = "Gokul";
let age = 22;
console.log(username.toUpperCase());
console.log(age + 5);
```

👉 TypeScript → transpiled → clean JS ready for execution.

## ⭐ Standout Points

* ✅ TypeScript = **type checker + transpiler**.
* ✅ Type checking = only at compile time, not runtime.
* ✅ Transpiling = converts `.ts` → `.js`.
* ✅ Even if errors exist, JS is produced (unless `noEmitOnError`).
* ✅ Commands:
  * `tsc index.ts` → compile single file
  * `tsc --watch` → recompile automatically
  * `tsc --init` → create `tsconfig.json`
  * `tsc` → compile whole project
