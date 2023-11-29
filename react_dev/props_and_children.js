// Props and Children \\ 

/*
props.children: special prop that is passed automatically to every component. 
Consider: some apples and some pears that need to be transported. You will use 
a bag and the bag does not care. There were be any changes in the bag's material, 
size, shape, or color. It can carry both apples and pears inside. 

Consider the following component: 
*/

function Apples(props){
    return(<div className="promo-section">
            <div>
                <h2>These apples are : {props.color}</h2>
            </div>
            <div>
                <h3>There are {props.number} apples.</h3>
            </div>
        </div>)
}
export default Apples 

//Pears Component: 
function pears(props){
    return(
        <h2>I don't like pears, but my friend {props.friend}, does</h2>
    )
}

//Props.children: for carrying either Apples or pears 

function Bag(props){
    const bag = {
        padding: "20px", 
        border: "1px solid gray", 
        background: "#fff", 
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}

export default Bag 

/*
    `Bag` component: it adds a wrapping div with a specific styling, 
    and then gives it `props.children` as its content. 
*/

<Example>
    Hello there 
</Example> 

/*
`Hello there` text is a child of the Example JSX element. 
The Example JSX Element above is an "invocation" of the 
Example.js file, which, in modern React, is usually a function 
component. 

This `Hello there` text can be passed as a named prop when rendering 
the Example component. 
*/

<Example children="Hello there"/> 

//In JSX `Hello there` text in `h3` element: 

<Example children={<h3>Hello there</h3>}/> 

//As a separate component named `Hello` 
<Example children={<Hello />} /> 

//More dynamic, giving its own prop: 
<Example children={<Hello message="Hello there" />} /> 

//Render the `Bag` component with the `Apples` component as its `props.children` 
<Bag children={<Apples color="yellow" number="5" />} /> 

//Render the `Bag` component, wrapping the `pears` component: 
<Bag children={<Pears friend="Peter" />} /> 

<Bag>
    <Apples color="yellow" number="5"/> 
</Bag>

<Bag>
    <Pears friend="Peter" /> 
</Bag>

// Multiple levels of nested JSX elements, 
// or single JSX element having multiple children 
// Trunk JSX element, inside of which is a single `Bag` JSX element, 
// holding an `Apples` and `Pears` JSX element: 
<Trunk> 
    <Bag> 
        <Apples color="yellow" number="5"/>
        <Pears friend="Peter">
    </Bag>
</Trunk>

/*
React: wrap a wide variety of components inside the `Bag`
component, using the children prop to achieve this. 
Overall, when you see a JSX element wrapping another JSX element, 
you can easily understand that it's all just `props.children` in the 
background. 
*/



