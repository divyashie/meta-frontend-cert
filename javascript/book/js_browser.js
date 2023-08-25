/* Web page content update */ 

let answer = prompt('What is your name?'); 

// Easiest and quickest way to capture user input on a website
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer; 
    document.body.innerText = ''; 
    document.body.appendChild(h1); 
}


// For more complex scenarios, use HTML forms, here you add dynamically the input element. 

var h1 = document.createElement('h1') 
h1.innerText = "Type into the input to make this text change." 

var input = document.createElement('input') 
input.setAttribute('type', 'text')

document.body.innerText = ''; 
document.body.appendChild(h1); 
document.body.appendChild(input); 

// Set up an event listener 
var h1 = document.createElement('h1') 
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input') 
input.setAttribute('type', 'text') 

document.body.innerText = ''; 
document.body.appendChild(h1); 
document.body.appendChild(input); 

input.addEventListener('change', function(){
    console.log(input.value)
})

// Updating the h1 element with the value you got from the input field 
var h1 = document.createElement('h1') 
h1.innerText = "Type into the input to make this text change." 

var input = document.createElement('input') 
input.setAttribute('type', 'text')

document.body.innerText = ''; 
document.body.appendChild(h1); 
document.body.appendChild(input); 

input.addEventListener('change', function(){
    h1.innerText = input.value
})

// Note: Combining DOM manipulation and event handling produces truly remarkable interactive websites. 




