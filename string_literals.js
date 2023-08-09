// ----------------------- TEMPLATE LITERALS ------------------------------------ // 
/* 
    Alias Template Strings: used most commonly for string interpolation --- to create strings by doing substitution of placeholders. 
    Example 
    Single, Double, and backticks to build strings in JS 
    ---- Only way to build strings up until ES6 -----
    'Hello, World!'
    "Hello, World!"
    `Hello, World!`  ---- ES6 introduced backtick characters as delimiters 

    Allowing for multi-line strings, string interpolation with embedded expressions, and special constructs: tagged templates. 
    Tagged template literal may not result in string; can be used with a custom tag function to perform whatever operations 
    you want on different parts of the template literal. 
*/

// --------------------- TEMPLATE AND REGULAR STRING ---------------------------- // 
let greet = "Hello"; 
let place = "World"; 
console.log(`${greet} ${place} !`); //display both variables using template literals

console.log(greet + " " + place + "!"); //ES5 

// VARIABLE INTERPOLATION // 
/* Besides variable interpolation, template strings can span multiple lines. 
    `Hello,
    World
    !
    ` 
It's possible to interpolate variables in template literals is because this syntax actually allows for expression evaluation. */ 

console.log(`${1 + 1 + 1 + 1 + 1} stars!`); 

// ------------------------------ TAGGED TEMPLATE ----------------------------------// 
/* Tagged template results from a function of your own, and precede the template literal with a function name.
    Template literal is passed to your tag function, where you can then perform whatever operations you want on different 
    parts of the template literal. 
*/

`\`` === "`"; // true  (escape a backtick in a template literal, use a backslash \ before the backtick) 

`\${1}` === "${1}"; // true (dollar signs can be escaped to prevent interpolation) 


// ------------------------------- MULTI-LINE STRINGS --------------------------------- // 
console.log("string text line 1\n" + "string text line 2"); 
/*
    {Result ... }
    "string text line 1 
    string text line 2" 
*/


console.log (`string text line 1 
string text line 2`); // Using template literals to achieve the same thing ^ 

/* 
    {Result ... }
    "string text line 1 
    string text line 2" 
*/ 


// ------------------------- STRING INTERPOLATION --------------------------------------- // 

const a = 5; 
const b = 10; 
console.log("Fifteen is " + (a + b) + "and\nnot " + (2*a+b) + "."); 

/* 
    {Result ... }
    "Fifteen is 15 and 
    not 20."
*/ 

// using template literal -- can avoid concatenation operator and improve readability by using placeholders 

const x = 5; 
const y = 10; 
console.log(`Fifteen is ${x+y} and 
not ${2*x+y}.`); 

/* 
    {Result ... }
    "Fifteen is 15 and 
    not 20."
*/ 

/* Note the difference between the syntaxes 
    Template literals coerce their expressions directly to strings 
    Addition coerces its operands to primitives first. 

*/

// ----------------------------- NESTING TEMPLATES ------------------------- // 

/* Nesting a template is easiest and more readable way to have configurable strings. 
    Without template literals, to return a certain value based on a particular condition, 
    you can do the following: 
*/ 

let classes = "header"; 
classes += isLargeScreen()
    ? ""
    : item.isCollapsed 
    ? " icon-expander" 
    : " icon-collapser"; 


// using a template literal but without nesting 
const classes1 = `header ${
    isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
}`; 


// using a template literal with nesting 
const classes2 = `header ${
    isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`; 


// --------------------------- TAGGED TEMPLATES --------------------------------

/* This advanced form of template literals use tags that allow you to parse template literals with a function. 
    The first argument of a tag function contains an array of string values and remainder are related to the expressions. 

    The tag function can then perform whatever operations on these args and return the manipulated string. 
*/

const person = "Mike"; 
const age = 28; 

function myTag(strings, personExp, ageExp){
    const str0 = strings[0];  // "That " 
    const str1 = strings[1]; // " is a "
    const str2 = strings[2]; // "." 

    const ageStr = ageExp > 99 ? "centenarian" : "youngster"; 

    return `${str0}${personExp}${str1}${ageStr}${str2}`; 
}

const output = myTag`That ${person} is a ${age}.`; 

console.log(output);        //That Mike is a youngster. 

