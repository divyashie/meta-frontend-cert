/* 
CREATING AND NESTING COMPONENTS 

React apps are made out of components. 
    - A component is a piece of the UI: 
        - logic part
        - appearance 
    - A component can be as small as a button, 
        or as large as an entire page. 
React components are JS functions that return markup: 
*/ 

function MyButton(){
    return (<button>I'm a button</button>); 
}

// This MyButton function can be nested into another component 
export default function MyApp(){
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />    //Must always start with capital letter, HTML tags must be lowercase 
        </div>
    )
}

// --- App.js --- \\ 

function MyButton(){
    return(<button>I'm a button</button>); 
}
export default function MyApp(){
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton /> 
        </div>
    );}

// The `export default` keywords specify the main component in the file. \\ 

/* WRITING MARKUP WITH JSX 
   - Most react projects use JSX for its convenience. 
   - JSX is stricter than HTML. 
        - You have to close tags like <br />. 
        - Your component also can't return multiple JSX tags. 
        - You have to wrap them into a shared parent, like a: 
            <div>...</div> or an empty <>...</> wrapper: 
        - If you have a lot of HTML to port to JSX, you can use an online converter. 
*/

function AboutPage(){
    return(
        <>
            <h1>About</h1>
            <p>Hello there.<br /></p>
        </>
    );
}

/*
------ ADDING STYLES ------ 
1. In React, you specify a CSS class with `className`. 
2. It works the same way as the HTML class attribute: 
    <img className="avatar" /> 
3. Then you write the CSS rules for it in a separate CSS file: 
    In your CSS file: 
    .avatar {
        border-radius: 50%; 
    }
4. React does not prescribe how you add CSS files. 
    Simply, you'll add a <link> tag to your HTML. 

-------- DISPLAYING DATA --------- 
1. JSX lets you put markup into JS. 
2. {} lets you "escape back" into JS to embed some variable from your code 
    and display it to the user. 
    Example: 

    return(
        <h1> 
            {user.name}
        </h1> 
    ); 
3. "escape into JS" from JSX attributes, but use {} instead of "" 
    Example: 
    `className="avatar"` passes the "avatar" string as the CSS class, but 
    `src={user.imageUrl}` reads the JS `user.imageUrl` variable value, and 
    then passes that value as the `src` attribute: 

    return(
        <img 
            className="avatar" 
            src={user.imageUrl}
        />
    ); 

    You can put more complex inside the JSX {} 
*/ 

// ------ App.js ------ \\ 

const user = {
    name: 'Hedy Lamarr', 
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', 
    imageSize: 90, 
}; 

export default function Profile(){
    return(
        <>
            <h1>{user.name}</h1>
            <img 
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize, 
                    height: user.imageSize 
                }}
            /> 
        </>
    ); 
}

// style={{}} is not a special syntax, but a regular {} object inside the style={} JSX curly braces. 
// You can use `style` attribute when your styles depend on JS variables. 

/*
CONDITIONAL RENDERING
In React, there is no special syntax for writing conditions. 
Instead, you'll user the same techniques as you use when writing 
regular JS code. 
Example: use an `if` statement to conditional include JSX: 
*/

let content; 
if (isLoggedIn){
    content = <AdminPanel />; 
}else {
    content = <LoginForm />; 
}
return (
    <div>
        {content}
    </div>
);


// More compact code option, you can use `conditional ? operator`. 
// Unlike `if`, it works inside JSX: 

<>
    // More compact code option, you can use `conditional ? operator`. 
    // Unlike `if`, it works inside JSX: 
    <div>
        {isLoggedIn ? (
            <AdminPanel />
        ) : (
            <LoginForm />
        )}
    </div>
    //When you don't need the `else` branch, you can use shorter `logical && syntax`:
    <div>
        {isLoggedIn && <AdminPanel />}
    </div>
</>

//All these approaches work for conditionally specifying attributes. 
//If you're unfamiliar with some of the JS syntax, you can start by always using `if ... else`. 

/*
RENDERING LISTS 
JS features like `for` loop and the array `map()` function to render lists of 
components.             
*/

// Consider an array of products 
const products = [
    {title : 'Cabbage', id: 1}, 
    {title: 'Garlic', id: 2}, 
    {title: 'Apple', id: 3}, 
]; 

//Inside the component, use the `map()` function to transform an array of products 
//into an array of <li> items: 

const listItems = products.map(product => 
    <li key={product.id}>
        {product.title}
    </li>); 
return (
    <ul>{listItems}</ul>
); 

/*
`<li>` has a `key` attribute. For each item in a list, you should 
pass a string or a num that uniquely identifies that item among its siblings. 
Usually, a key should be coming from your data, such as database ID. 
React uses your keys to know what happened if you later insert, delete, or reorder the items.   
*/

// ------ APP.js ------- \\ 

const products_ = [
    {title : 'Cabbage', isFruit: false, id: 1}, 
    {title: 'Garlic', isFruit: false, id: 2}, 
    {title: 'Apple', isFruit: true, id: 3}, 
]; 

export default function ShoppingList(){
    const listItems = products.map(product => 
        <li
            key={product.id}
            style={{
                color: product_.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}

        </li>    
    ); 

    return (
        <ul>{listItems}</ul>
    ); 
}

/*
RESPONDING TO EVENTS
You can respond to events by declaring event handler functions inside your components: 

Notice how `onClick={handleClick}` has no parentheses at the end! 
Do not call the event handler function: you only need to pass it down. 
React will call your event handler when the user clicks the button. 
*/

function MyButton(){
    function handleClick(){
        alert('You clicked me!'); 
    }
    return (
        <button onClick={handleClick}>
            Click me
        </button>
    ); 
}

/*
UPDATING THE SCREEN 
You'll want your component to "remember" some info and display it. 
For example, maybe you want to count the num of times a button is clicked. 
To do this, add state to your component. 
First, import `useState` from React: 
*/

import {useState } from 'react'; 

//Now you can declare a state variable inside your component: 

function MyButton(){
    const [count, setCount] = useState(0); 
    // ... 
}

/*
`useState` : the current state (count), and the function that lets you 
update it `setCount`. You can give them any names, but conventionally it is: 
[something, setSomething] 

When the button is displayed at the start, count will be 0 (i.e. the value of `useState()`). 
When you want to change state, call `setCount()` and pass the new value to it. 
Clicking this button will increment the counter: 
*/

function MyButton(){
    const [count, setCount] = useState(0); 

    function handleClick(){
        setCount(count +1); 
    }

    return(
    <button onClick={handleClick}>
        Clicked {count} times     
    </button>)
}

/*
React will call your component function again. 
`count` will be 1 and 2 and ... 
If you render the same component multiple X, each will get its own state. 
Click each button separately: 
*/

// ------- APP.JS -------- \\ 

import {useState } from 'react'; 

export default function MyApp(){
    return(
        <div>
            <h1>Counters that update separately </h1>
            <MyButton />
            <MyButton /> 
        </div>
    ); 
}

function MyButton(){
    const [count, setCount] = useState(0); 
    function handleClick(){
        setCount(count + 1); 
    }
    return (
        <button onClick={handleClick}>
            Clicked {count} times 
        </button>
    ); 
}

//Each button "remembers" its own `count` state and doesn't affect other buttons. 


