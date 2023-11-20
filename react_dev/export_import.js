/* EXPORT BEFORE DECLARATIONS 
    Label any declaration as exported by placing `export`
    before it, be it a variable, function, or a class.  
*/ 

//export an array 
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 
    'May', 'June', 'July', 'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'
]; 

//export a constant 
export const MODULES_BECAME_STANDARD_YEAR = 2015; 

//export a class 
export class User {
    constructor(name){
        this.name = name; 
    }
}

//NOTE: no semicolons after export class/function cause it is still a function declaration. 

export function sayHi(user){
    alert(`Hello, ${user}!`); 
}   // no; at the end 

/*
    EXPORT APART FROM DECLARATIONS 
    We can put `export` separately, first declare, then export 
*/

// say.js 
export function sayHi(user){
    alert(`Hello, ${user}!`); 
} 

export function sayBye(user){
    alert(`Bye, ${user}!`); 
}

export{sayHi, sayBye}; // a list of exported variables | technically, 
                      //we could put `export` above functions as well 
/*
    IMPORT * 
    Usually, we put a list of what to import in curly braces: 
    `import {...}`, 
*/

//main.js 
import {sayHi, sayBye} from './say.js'; 

sayHi('John');  //Hello, John! 
sayBye('John'); //Bye, John! 

// In case of a lot of import, we can simply put everything in an object 
// using import * as <obj>, for instance: 

//main.js 
import * as say from './say.js'

say.sayHi('John'); 
say.sayBye('John');

/* Here are a few reasons why we should consider importing explictly through a list:
    1. gives shorter names: sayHi() instead of say.sayHi() 
    2. gives better overview of code structure: what is used and where. 
    3. makes code support and refactoring easier. 

    Modern build tools, webpack, ..., bundles modules together and optimize them to 
    speedup loading. They also removed unused imports. 

    `import * as library` from a huge code library, then use only a few methods, then 
    unused ones will not be included into the optimized bundle. 
*/ 

/*
    IMPORT "as" 
    Let's import `sayHi` into the local variable `hi` for brevity, 
    and import `sayBye` as `bye`: 
*/

//main.js 
import {sayHi as hi, sayBye as bye} from './say.js'; 

