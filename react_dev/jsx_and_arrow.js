/* USING FUNCTION EXPR & ARROW FUNCTIONS TO DEFINE COMPONENTS*/

// Function expressions 

function Nav(props){
    return (
        <ul> 
            <li>{[props.first]}</li>
        </ul>
    )
}

// this component returns a list item containing the value of the first prop 
// Use function expression instead 

const Nav = function(props){
    return(
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

// here you are using an anonymous(nameless) function, and assigning this anonymous function declaration 
// to a variable declared using `const` and `nav`. 
// `nav` component is still the same. 

// Components as Arrow functions (shorter syntax)
/*
    - the arrow itself can replace the `function` keyword. 
    - the parameters that this arrow function accepts are listed before the arrow itself. 
*/

// Consider the smallest possible anonymous ES5 function: 
const example = function(){}

// Written as an arrow function: 
const example = () => 

// ------------
const Nav = props => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

/*
You write arrow functions, for any number of parameters other than a single parameter, 
using {} around parameters is compulsory. 
*/

const Nav = () => {
    return (
        <ul>
            <li>Home</li>
        </ul>
    )
}

/*
implicit return in arrow functions. It works if your entire component is a single line of code. 
with implicit return, you don't even have to use {} that are compulsory function body delimiters in all other cases. 
*/ 

const Nav = () => <ul><li>Home</li></ul>

// Using Arrow functions in other situations 
// Example: forEach() built-in array method 

[10, 20, 30].forEach(item => item * 10) 

/*
Output:  
100 
200 
300 
*/

// In ES5 syntax: 

[10, 20, 30].forEach(function(item){
    return item * 10 
    }
)

// In ES5 syntax: 

function(item){
    return item * 10 
}

// In ES6 syntax: 
item => item * 10 

/*
Arrow functions are used extensively in JSX in React.  
*/
