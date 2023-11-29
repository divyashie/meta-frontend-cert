/*
`link` HTML element in the head of the index.html file in which your React app will mount. 
The `href` attribute loads some CSS styles, inside the function component's declarations, 
you can access those CSS classes using the `className` attribute. 
*/

function Promo(props){
    return(
        <div className="promo-section">
            <div>
                <h1>{props.heading}</h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}

//CSS Section 
.promo-section{
    font-weight: bold;
    line-height: 20px; 
}

// Another way to add CSS styles to components is using inline styles. 
// The syntax of inline styles in JSX is a bit custom.
// Consider a starting `Promo` component with some inline styles 

function Promo(props){
    return(
        <div className="promo-section">
            <div>
                <h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    )
}

export default Promo; 

// to update the `Promo` component using JS expression syntax: <h1 style={}> 
// Let's add a `style object literal` inside of {}: 

<h1 style={{color:"tomato", fontSize:"40px"}}> 

// rewrite this object literal: 
{
    color: "tomato", 
    fontSize: "40px"
}

//With style object saved as a JS variable: 

function Promo(props){
    const styles = {
        color:"tomato", 
        fontSize: "40px"
    }

    return (
        <div className="promo-section">
            <div>
                <h1 style={styles}>
                    {props.heading}
                </h1>
            </div>
            <div>
                <h2>{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}

// Using this approach makes your components more self-contained, 
// as they come with their own styles built-in, but it also makes them a bit harder to maintain. 


