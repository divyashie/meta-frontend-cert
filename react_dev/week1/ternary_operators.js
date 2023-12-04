/*
How to use ternary expressions to achieve a random return, 
how to invoke functions inside of JSX expressions. 
*/

let name = 'Bob'; 
if (name == 'Bob'){
    console.log('Hello, Bob'); 
} else {
    console.log('Hello, friend'); 
}; 

/*
A ternary operator in JS uses 2 distinct characters: 
    - ? 
    - left of ? -- use condition, 
    - right : 
    name == Bob ? "Yes, it is Bob" : "I don't know this person"; 
*/

let name = 'Bob'; 
name == 'Bob' ? console.log('Hello, Bob') : console.log('Hello, Friend'); 

// USING TENARY EXPRESSIONS IN JSX 

function Example(){
    return(
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    ); 
};

// USING FUNCTION CALLS IN JSX 

/*
Function invocation is an expression because every expression returns a value, 
and function invocation will always return a value, even when that return value 
is `undefined`.  
*/

function Example2(){
    return(
        <div className="heading"> 
        <h1>Here's a random number from 0 to 10: 
            { Math.floor(Math.random() * 10) + 1}
        </h1>
        </div>
    ); 
}; 

function Example3(){
    const getRandomNum = () => Math.floor(Math.random() * 10) + 1 
    return (
        <div className="heading">
            <h1>Here's a random number from 0 to 10: { getRandomNum() }</h1> 
        </div>
    ); 
}; 

// --------- getRandomNum(): function declaration or function expression --------- \\ 
// Function expression: 
const getRandomNum = function(){
    return Math.floor(Math.random() * 10) + 1
}; 

// Function declaration: 
function getRandomNum(){
    return Math.floor(Math.random() * 10) + 1 
}; 



