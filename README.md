# JavaScript Fundamentals

> An introductory guide to the JavaScript programming language, covering its history, core features, data structures, and advanced concepts like asynchronous programming and the DOM.

## Table of Contents

1.  [Introduction to JavaScript](#1-introduction-to-javascript)
    - [What is JavaScript?](#what-is-javascript)
    - [History](#history)
    - [Core Features](#core-features)
2.  [Getting Started](#2-getting-started)
    - [Writing JS in HTML](#writing-js-in-html)
    - [Comments](#comments)
    - [Input & Output](#input--output)
3.  [Language Basics](#3-language-basics)
    - [Variables](#variables)
    - [Data Types](#data-types)
    - [Operators](#operators)
4.  [Control Flow](#4-control-flow)
    - [Conditional Statements](#conditional-statements)
    - [Looping Statements](#looping-statements)
5.  [Functions](#5-functions)
    - [Types of Functions](#types-of-functions)
6.  [Data Structures](#6-data-structures)
    - [Objects](#objects)
    - [Arrays](#arrays)
    - [Strings](#strings)
7.  [Asynchronous JavaScript](#7-asynchronous-javascript)
    - [Threading Model](#threading-model)
    - [Promises](#promises)
    - [Async/Await](#asyncawait)
    - [Fetch API](#fetch-api)
8.  [Browser & Web APIs](#8-browser--web-apis)
    - [DOM (Document Object Model)](#dom-document-object-model)
    - [Events](#events)
    - [Timers](#timers)
9.  [Advanced Concepts](#9-advanced-concepts)
    - [Hoisting](#hoisting)
    - [Closures](#closures)
    - [`this` Keyword](#this-keyword)
    - [ES6+ Features](#es6-features)

---

## 1. Introduction to JavaScript

JavaScript is a language used to create dynamic, client-side web pages. It is an object-based, lightweight, and cross-platform scripting language.

### What is JavaScript?
- JavaScript is a dynamically typed language, meaning it doesn't require a compiler; web browsers have a built-in engine to execute the code.
- It is a lightweight, object-oriented programming language used for both client-side and server-side technologies.
- Initially known as a "scripting language" because its use was limited to browsers, it is now considered a full programming language used for servers, databases, and mobile devices.

### History
- **1993:** Mosaic, the first popular web browser, could only handle static pages.
- **1994:** Netscape began a project to create a browser with dynamic capabilities, called Netscape Navigator.
- **1995:** Brendan Eich created a language to add these dynamic features. It was officially released as "Mocha," later renamed "LiveScript," and finally "JavaScript" for marketing purposes, as Java was popular at the time.
- The current version as of 2024 is ES15.

### Core Features
- **Browser Support:** All popular web browsers support JavaScript with built-in execution environments.
- **Structured Language:** It follows the syntax and structure of the C language.
- **Object-Oriented:** Supports OOP concepts.
- **Lightweight & Interpreted:** It is not compiled before execution.
- **Case-Sensitive:** The language distinguishes between uppercase and lowercase letters.
- **Cross-Platform:** Supported on various operating systems like Windows, macOS, and Linux.

---

## 2. Getting Started

### Writing JS in HTML
JavaScript can be inserted into an HTML document in three ways:
1.  **Head Section:** Using the `<script>` tag inside the `<head>` section.
    ```html
    <head>
      <script>
        // JS code in head section
      </script>
    </head>
    ```
2.  **Body Section:** Using the `<script>` tag inside the `<body>` section.
    ```html
    <body>
      <script>
        // JS code in body section
      </script>
    </body>
    ```
3.  **External JS File:** Creating a separate `.js` file and linking it in the `head` or `body` section. This promotes code reusability.
    ```html
    <script type="text/javascript" src="external.js"></script>
    ```

### Comments
Comments are used to add information about the code, make it easier to understand, and prevent execution of unnecessary code. They are ignored by the JavaScript engine.
- **Single-line comments:** `// This is a comment`
- **Multi-line comments:** `/* This is a comment */`

### Input & Output
-   **Output Methods:**
    -   `console.log()`: Prints a message to the developer console. Variations include `console.error()`, `console.warn()`, and `console.info()`.
    -   `document.write()`: Writes content directly onto the HTML webpage.
    -   `window.alert()` or `alert()`: Displays an alert box on the webpage.
-   **Input Method:**
    -   `prompt()` or `window.prompt()`: Displays a dialog box that prompts the user for input.

---

## 3. Language Basics

### Variables
Variables are storage locations for data.
- **Keywords:** Created using `var` (old version), `let`, and `const` (ES6 version).
- **Naming Rules:**
    - Can include letters, digits, underscores (`_`), and dollar signs (`$`).
    - Cannot begin with a digit.
    - Keywords (like `var`, `if`) cannot be used as names.
    - Case-sensitive (`var a` is different from `var A`).
- **`var` vs. `let` vs. `const`:**
    - `var`: Can be redeclared and reassigned.
    - `let`: Can be reassigned but not redeclared.
    - `const`: Cannot be redeclared or reassigned and must be initialized at declaration.

### Data Types
There are 8 different data types in JavaScript, categorized into two types.
1.  **Primitive Datatypes:** Basic, immutable data types stored in stack memory.
    - `Number`: Integers and decimals.
    - `String`: Data enclosed in quotes (`''` or `""`).
    - `Boolean`: `true` or `false` values.
    - `Undefined`: A variable that has been declared but not assigned a value.
    - `Null`: Represents the intentional absence of any object value.
    - `BigInt`: For numbers larger than 2^53 - 1.
    - `Symbol`: A unique and immutable primitive value.
2.  **Non-Primitive Datatypes:** Complex, mutable data types stored in heap memory.
    - `Object`: Includes objects, arrays, and functions.

You can find the datatype of a variable using the `typeof` operator.

### Operators
Operators are symbols used to perform operations on operands.
- **Arithmetic:** `+`, `-`, `*`, `/`, `%`, `++`, `--`.
- **Comparison:** `==`, `===` (identical), `!=`, `!==`, `>`, `<`, `>=`, `<=`.
- **Logical:** `&&` (AND), `||` (OR), `!` (NOT).
- **Assignment:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`.
- **Bitwise:** `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`.
- **Special:** `?:` (ternary), `typeof`, `delete`, `in`, `new`.

---

## 4. Control Flow

### Conditional Statements
These statements control the execution of code based on a condition.
- `if`: Executes code if a condition is true.
- `if-else`: Executes one block of code if the condition is true, and another if it's false.
- `else-if`: Allows for checking multiple conditions.
- `switch`: Selects one of many code blocks to be executed.
- `ternary operator`: A shorthand for an `if-else` statement. Syntax: `condition ? true_statement : false_statement`.

### Looping Statements
Loops are used to execute a block of code repeatedly.
- `for`: Loops through a block of code a number of times.
- `while`: Loops through a block of code while a specified condition is true.
- `do-while`: Executes the code block once before checking the condition, then repeats as long as the condition is true.
- `for...in`: Iterates over the keys (properties) of an object.
- `for...of`: Iterates over the values of an iterable (like an array).

---

## 5. Functions

A function is a block of code designed to perform a specific task. It promotes code readability and reusability.

### Types of Functions
- **Named Function:** A standard function with a name.
- **Parameterized Function:** A function that accepts input parameters.
- **Return Function:** A function that returns a value using the `return` keyword.
- **Anonymous Function:** A function without a name, often assigned to a variable (function expression).
- **Arrow Function (ES6):** A more concise syntax for writing functions. Often used as callback functions.
- **Callback Function:** A function passed as an argument to another function.
- **Higher-Order Function:** A function that takes another function as an argument.
- **IIFE (Immediately Invoked Function Expression):** A function that is defined and executed immediately.
- **Async Function:** A function declared with `async` that enables asynchronous, promise-based behavior.

---

## 6. Data Structures

### Objects
An object is a collection of key-value pairs that can store multiple types of data in a single variable.
- **Creation:**
    1.  **Object Literals:** `let person = { key: 'value' };`.
    2.  **Instance of Object:** `let person = new Object();`.
    3.  **Object Constructor:** Using a function to create objects.
- **CRUD Operations:**
    - **Read:** `object.key` or `object['key']`.
    - **Update/Insert:** `object.key = 'newValue'`.
    - **Delete:** `delete object.key`.
- **Object Methods:**
    - `Object.keys(obj)`: Returns an array of an object's keys.
    - `Object.values(obj)`: Returns an array of an object's values.
    - `Object.seal(obj)`: Prevents adding or deleting properties but allows modifying existing ones.
    - `Object.assign(target, ...sources)`: Copies properties from one or more source objects to a target object.

### Arrays
An array is an indexed collection that can store multiple elements of any data type.
- **Declaration:**
    - **Array Literal:** `let arr = [1, 'hello', true];`.
    - **Array Constructor:** `let arr = new Array(1, 2, 3);`.
- **Accessing Elements:** Use index values, e.g., `arr[0]`.
- **Length:** Find the number of elements with the `.length` property.
- **Common Methods:**
    - **Basic:** `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`, `join()`, `reverse()`, `includes()`.
    - **Advanced:** `forEach()`, `map()`, `filter()`, `reduce()`, `sort()`.

### Strings
A string is a collection of characters enclosed in single or double quotes.
- **Concatenation:** Combining strings using the `+` operator.
- **Common Methods:**
    - `charAt()`: Get a character at a specific index.
    - `toLowerCase()` / `toUpperCase()`: Convert the string's case.
    - `slice()` / `substring()`: Extract a part of the string.
    - `replace()` / `replaceAll()`: Replace characters or substrings.
    - `trim()`: Remove whitespace from both ends of a string.
    - `concat()`: Join two or more strings.

---

## 7. Asynchronous JavaScript

Asynchronous programming allows tasks to run concurrently without blocking the main program flow, which is useful for operations like network requests or timers.

### Threading Model
- JavaScript is primarily a single-threaded language, meaning it processes one command at a time.
- Although fundamentally synchronous, its asynchronous features allow it to handle operations that behave like they are multi-threaded.

### Promises
- A promise is an object representing the eventual completion (or failure) of an asynchronous operation.
- **States:**
    1.  **Pending:** The initial state; neither fulfilled nor rejected.
    2.  **Fulfilled:** The operation completed successfully.
    3.  **Rejected:** The operation failed.
- **Handling:** The `.then()` method handles a fulfilled promise, and `.catch()` handles a rejected one.

### Async/Await
- Introduced in ES8 to simplify working with promises.
- `async`: Declares a function as asynchronous.
- `await`: Pauses the execution of an `async` function until a promise is resolved.

### Fetch API
- The `fetch()` method is used to make network requests (e.g., to an API).
- It is promise-based and returns a promise that resolves to the response of the request.

---

## 8. Browser & Web APIs

### DOM (Document Object Model)
- The DOM is an interface that allows JavaScript to interact with the browser by representing the HTML document as a tree-like structure.
- **Purpose:** JavaScript can be used to create, modify, and delete HTML elements, attributes, and styles dynamically.
- **Common Methods:**
    - `document.getElementById('id')`: Selects a single element by its ID.
    - `document.getElementsByClassName('class')`: Selects elements by class name.
    - `document.querySelector('selector')`: Returns the first element that matches a CSS selector.
    - `document.querySelectorAll('selector')`: Returns all elements that match a CSS selector.
    - `document.createElement('tagName')`: Creates a new HTML element.
    - `element.setAttribute('name', 'value')`: Sets an attribute on an element.
    - `element.remove()`: Removes an element from the DOM.

### Events
- An event is an action that occurs on a webpage, such as a click or key press.
- **Event Listener:** Catches the event (e.g., `onclick`, `onmouseover`, `onsubmit`).
- **Event Handler:** The function that is executed when the event occurs.
- **`addEventListener()`:** A method to attach an event handler to an element without adding attributes to the HTML. It takes the event type and a callback function as parameters.

### Timers
Timers are used to delay the execution of a function or to call it repeatedly.
- `setTimeout(callback, delay)`: Executes a function once after a specified delay.
- `setInterval(callback, delay)`: Executes a function repeatedly at a given interval until stopped.

---

## 9. Advanced Concepts

### Hoisting
- JavaScript's default behavior of moving declarations to the top of their scope before code execution.
- Only declarations are hoisted, not initializations.
- **`var`:** Declarations are hoisted and initialized with `undefined`.
- **`let` and `const`:** Declarations are hoisted but are not accessible until initialized (this is known as the Temporal Dead Zone or TDZ).
- **Functions:** Function declarations are fully hoisted (both name and definition), while function expressions are not.

### Closures
- A feature where an inner function has access to the variables of its outer (parent) function, even after the outer function has finished executing.
- A closure has access to three scopes: its own scope, the outer function's scope, and the global scope.

### `this` Keyword
- A special keyword that refers to the object it belongs to, or the current context of execution.
- The context of `this` can be explicitly changed using the `call()`, `apply()`, and `bind()` methods.

### ES6+ Features
- **Destructuring:** A syntax that makes it possible to unpack values from arrays or properties from objects into distinct variables.
- **Spread Operator (`...`):** Allows an iterable (like an array) or an object to be expanded in places where multiple elements/properties are expected.
- **Rest Parameters (`...`):** Allows a function to accept an indefinite number of arguments as an array.
- **Template Literals:** Strings defined with back-ticks (``) that allow for embedded expressions and multi-line strings.

---

## 4. Control Flow

### Conditional Statements
[cite_start]These statements control the execution of code based on a condition[cite: 627].
- [cite_start]`if`: Executes code if a condition is true[cite: 629].
- [cite_start]`if-else`: Executes one block of code if the condition is true, and another if it's false[cite: 630].
- [cite_start]`else-if`: Allows for checking multiple conditions[cite: 631].
- [cite_start]`switch`: Selects one of many code blocks to be executed[cite: 632].
- `ternary operator`: A shorthand for an `if-else` statement. [cite_start]Syntax: `condition ? true_statement : false_statement`[cite: 633, 669].

### Looping Statements
[cite_start]Loops are used to execute a block of code repeatedly[cite: 671].
- [cite_start]`for`: Loops through a block of code a number of times[cite: 673].
- [cite_start]`while`: Loops through a block of code while a specified condition is true[cite: 674].
- [cite_start]`do-while`: Executes the code block once before checking the condition, then repeats as long as the condition is true[cite: 675].
- [cite_start]`for...in`: Iterates over the keys (properties) of an object[cite: 676, 697].
- [cite_start]`for...of`: Iterates over the values of an iterable (like an array)[cite: 677, 702].

---

## 5. Functions

[cite_start]A function is a block of code designed to perform a specific task[cite: 249]. [cite_start]It promotes code readability and reusability[cite: 252, 253].

### Types of Functions
- [cite_start]**Named Function:** A standard function with a name[cite: 265, 275].
- [cite_start]**Parameterized Function:** A function that accepts input parameters[cite: 266, 292].
- [cite_start]**Return Function:** A function that returns a value using the `return` keyword[cite: 267, 309].
- [cite_start]**Anonymous Function:** A function without a name, often assigned to a variable (function expression)[cite: 268, 317, 328].
- **Arrow Function (ES6):** A more concise syntax for writing functions. [cite_start]Often used as callback functions[cite: 271, 348, 350].
- [cite_start]**Callback Function:** A function passed as an argument to another function[cite: 269, 342].
- [cite_start]**Higher-Order Function:** A function that takes another function as an argument[cite: 270, 345].
- [cite_start]**IIFE (Immediately Invoked Function Expression):** A function that is defined and executed immediately[cite: 272, 386].
- [cite_start]**Async Function:** A function declared with `async` that enables asynchronous, promise-based behavior[cite: 273, 420].

---

## 6. Data Structures

### Objects
[cite_start]An object is a collection of key-value pairs that can store multiple types of data in a single variable[cite: 429, 430].
- **Creation:**
    1.  [cite_start]**Object Literals:** `let person = { key: 'value' };`[cite: 436, 440].
    2.  [cite_start]**Instance of Object:** `let person = new Object();`[cite: 437, 442].
    3.  [cite_start]**Object Constructor:** Using a function to create objects[cite: 438].
- **CRUD Operations:**
    - [cite_start]**Read:** `object.key` or `object['key']`[cite: 452].
    - [cite_start]**Update/Insert:** `object.key = 'newValue'`[cite: 454, 456].
    - [cite_start]**Delete:** `delete object.key`[cite: 458].
- **Object Methods:**
    - [cite_start]`Object.keys(obj)`: Returns an array of an object's keys[cite: 468].
    - [cite_start]`Object.values(obj)`: Returns an array of an object's values[cite: 470].
    - [cite_start]`Object.seal(obj)`: Prevents adding or deleting properties but allows modifying existing ones[cite: 472, 474, 475].
    - [cite_start]`Object.assign(target, ...sources)`: Copies properties from one or more source objects to a target object[cite: 477].

### Arrays
[cite_start]An array is an indexed collection that can store multiple elements of any data type[cite: 480, 481, 483].
- **Declaration:**
    - [cite_start]**Array Literal:** `let arr = [1, 'hello', true];`[cite: 486, 490].
    - [cite_start]**Array Constructor:** `let arr = new Array(1, 2, 3);`[cite: 487, 496].
- [cite_start]**Accessing Elements:** Use index values, e.g., `arr[0]`[cite: 502].
- [cite_start]**Length:** Find the number of elements with the `.length` property[cite: 509].
- **Common Methods:**
    - [cite_start]**Basic:** `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`, `join()`, `reverse()`, `includes()`[cite: 518].
    - [cite_start]**Advanced:** `forEach()`, `map()`, `filter()`, `reduce()`, `sort()`[cite: 530].

### Strings
[cite_start]A string is a collection of characters enclosed in single or double quotes[cite: 590].
- [cite_start]**Concatenation:** Combining strings using the `+` operator[cite: 593].
- **Common Methods:**
    - [cite_start]`charAt()`: Get a character at a specific index[cite: 596, 606].
    - [cite_start]`toLowerCase()` / `toUpperCase()`: Convert the string's case[cite: 597, 598].
    - [cite_start]`slice()` / `substring()`: Extract a part of the string[cite: 599, 600].
    - [cite_start]`replace()` / `replaceAll()`: Replace characters or substrings[cite: 601, 602].
    - [cite_start]`trim()`: Remove whitespace from both ends of a string[cite: 603, 622].
    - [cite_start]`concat()`: Join two or more strings[cite: 604, 625].

---

## 7. Asynchronous JavaScript

[cite_start]Asynchronous programming allows tasks to run concurrently without blocking the main program flow, which is useful for operations like network requests or timers[cite: 957, 958].

### Threading Model
- [cite_start]JavaScript is primarily a single-threaded language, meaning it processes one command at a time[cite: 406].
- [cite_start]Although fundamentally synchronous, its asynchronous features allow it to handle operations that behave like they are multi-threaded[cite: 409, 417, 418].

### Promises
- [cite_start]A promise is an object representing the eventual completion (or failure) of an asynchronous operation[cite: 962].
- **States:**
    1.  [cite_start]**Pending:** The initial state; neither fulfilled nor rejected[cite: 964].
    2.  [cite_start]**Fulfilled:** The operation completed successfully (`resolve()`)[cite: 965, 973].
    3.  [cite_start]**Rejected:** The operation failed (`reject()`)[cite: 966, 973].
- [cite_start]**Handling:** The `.then()` method handles a fulfilled promise, and `.catch()` handles a rejected one[cite: 975].

### Async/Await
- [cite_start]Introduced in ES8 to simplify working with promises[cite: 420].
- [cite_start]`async`: Declares a function as asynchronous[cite: 421, 1002].
- [cite_start]`await`: Pauses the execution of an `async` function until a promise is resolved[cite: 421, 1004].

### Fetch API
- [cite_start]The `fetch()` method is used to make network requests (e.g., to an API)[cite: 999].
- [cite_start]It is promise-based and returns a promise that resolves to the response of the request[cite: 998, 1000].

---

## 8. Browser & Web APIs

### DOM (Document Object Model)
- [cite_start]The DOM is an interface that allows JavaScript to interact with the browser by representing the HTML document as a tree-like structure[cite: 721, 722].
- [cite_start]**Purpose:** JavaScript can be used to create, modify, and delete HTML elements, attributes, and styles dynamically[cite: 755, 756, 759].
- **Common Methods:**
    - [cite_start]`document.getElementById('id')`: Selects a single element by its ID[cite: 771, 793].
    - [cite_start]`document.getElementsByClassName('class')`: Selects elements by class name[cite: 772, 800].
    - [cite_start]`document.querySelector('selector')`: Returns the first element that matches a CSS selector[cite: 775, 803].
    - [cite_start]`document.querySelectorAll('selector')`: Returns all elements that match a CSS selector[cite: 776].
    - [cite_start]`document.createElement('tagName')`: Creates a new HTML element[cite: 777, 806].
    - [cite_start]`element.setAttribute('name', 'value')`: Sets an attribute on an element[cite: 811].
    - [cite_start]`element.remove()`: Removes an element from the DOM[cite: 778, 809].

### Events
- [cite_start]An event is an action that occurs on a webpage, such as a click or key press[cite: 815, 818].
- [cite_start]**Event Listener:** Catches the event (e.g., `onclick`, `onmouseover`, `onsubmit`)[cite: 821, 822].
- [cite_start]**Event Handler:** The function that is executed when the event occurs[cite: 824].
- [cite_start]**`addEventListener()`:** A method to attach an event handler to an element without adding attributes to the HTML[cite: 839]. [cite_start]It takes the event type and a callback function as parameters[cite: 840, 841, 842].

### Timers
[cite_start]Timers are used to delay the execution of a function or to call it repeatedly[cite: 866].
- [cite_start]`setTimeout(callback, delay)`: Executes a function once after a specified delay[cite: 868].
- [cite_start]`setInterval(callback, delay)`: Executes a function repeatedly at a given interval until stopped[cite: 869, 871].

---

## 9. Advanced Concepts

### Hoisting
- [cite_start]JavaScript's default behavior of moving declarations to the top of their scope before code execution[cite: 873].
- [cite_start]Only declarations are hoisted, not initializations[cite: 874].
- [cite_start]**`var`:** Declarations are hoisted and initialized with `undefined`[cite: 881].
- [cite_start]**`let` and `const`:** Declarations are hoisted but are not accessible until initialized (this is known as the Temporal Dead Zone or TDZ)[cite: 897].
- [cite_start]**Functions:** Function declarations are fully hoisted (both name and definition), while function expressions are not[cite: 882, 909].

### Closures
- [cite_start]A feature where an inner function has access to the variables of its outer (parent) function, even after the outer function has finished executing[cite: 917, 919].
- [cite_start]A closure has access to three scopes: its own scope, the outer function's scope, and the global scope[cite: 920, 921, 922, 923].

### `this` Keyword
- [cite_start]A special keyword that refers to the object it belongs to, or the current context of execution[cite: 1016].
- [cite_start]The context of `this` can be explicitly changed using the `call()`, `apply()`, and `bind()` methods[cite: 1017, 1018, 1019, 1020].

### ES6+ Features
- [cite_start]**Destructuring:** A syntax that makes it possible to unpack values from arrays or properties from objects into distinct variables[cite: 938].
- [cite_start]**Spread Operator (`...`):** Allows an iterable (like an array) or an object to be expanded in places where multiple elements/properties are expected[cite: 954].
- [cite_start]**Rest Parameters (`...`):** Allows a function to accept an indefinite number of arguments as an array[cite: 1010].
- [cite_start]**Template Literals:** Strings defined with back-ticks (``) that allow for embedded expressions and multi-line strings[cite: 1007, 1008].
