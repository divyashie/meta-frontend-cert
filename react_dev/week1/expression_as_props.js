/*
    EXPRESSIONS AS PROPS 
        can be: 
            - ternary operators
            - function calls 
            - some arithmetic operations 
*/

const bool = false; 

function Example(props) {
    return (
        <h2>The value of the toggleBoolean prop is {props.toggleBoolean.toString()}</h2>  //converting boolean value to a string using JS in-built toString method. 
    );
}; 

export default function App(){
    return (
        <div className ="App">
            <Example toggleBoolean={!bool} /> 
        </div>
    ); 
}; 

const bool = false; 
const str1 = "just"; 

function Example(props){
    return(
        <div>
            <h2>
                The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
}; 

export default function App(){
    return(
        <div className="App">
            <Example
                toggleBoolean={!bool}
                math={(10+20) / 3}
                str={str1 + ' another ' + 'string'}
            /> 
        </div>
    )
}

/*
`Example` component: 
    - `toggleBoolean`: remains unchanged  
    - `math`: added to show how you can add arithmetic operators and numbers inside JSX and to be evaluated like JS.  
    - `str` : added to show that you can concatenate strings and variables (another and string to str1 var)

    To summarise, you can also use function components as prop values inside JSX elements when rendering those 
    function components. 
*/


