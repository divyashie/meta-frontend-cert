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