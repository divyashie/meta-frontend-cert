/*
Working with built-in methods that exist on arrays: 
1. forEach
2. filter 
3. map 
*/

// ========== ForEach() method ========= 
const fruits = ['kiwi','mango', 'apple', 'pear']; 
function appendIndex(fruit, index){
    console.log(`${index}.${fruit}`)
}
fruits.forEach(appendIndex); 

// More impact and increase readability 
const veggies = ['onion', 'garlic', 'potato']; 
veggies.forEach(function(veggie, index){
    console.log(`${index}.${veggie}`); 
}); 

// ========== filter method ===========
const nums = [0,10,20,30,40,50]; 
nums.filter(function(num){
    return num > 20; 
})

// ========== map method ===============
[0,10,20,30,40,50].map(function(num){
    return num/10
})

/*
Working with objects
*/

const result = []
const drone = {
    speed: 100, 
    color: 'yellow'
}
const droneKeys = Object.keys(drone); 
droneKeys.forEach(function(key){
    result.push(key, drone[key])
})
console.log(result) //['speed', 100, 'color', 'yellow']

// ============ Working with Maps in JS ================
let bestBoxers = new Map(); 
bestBoxers.set(1, "The Champion"); 
bestBoxers.set(2, "The Runner-up"); 
bestBoxers.set(3, "The third place"); 

console.log(bestBoxers); // Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

bestBoxers.get(1); //'The Champion' to get a specific value 

new set();  // Build a new set constructor 

const repetitiveFruits =['apple', 'pear', 'apple', 'pear', 'plum', 'apple']; 
const uniqueFruits = new Set(repetitiveFruits); 
console.log(uniqueFruits);  // {'apple', 'pear', 'plum'}

/* Using Spread and Rest */ 

// Join arrays, objects using the rest operator 
const fruits1 = ['apple', 'pear', 'plum']; 
const berries = ['blueberry', 'strawberry']; 
const fruitsAndBerries = [...fruits,...berries]; 
console.log(fruitsAndBerries); // outputs a single array: ['apple', 'pear', 'plum', 'blueberry', 'strawberry'] 

// Easy to join objects 
const flying = {wings:2} 
const car = {wheels: 4} 
const flyingCar = {...flying,...car} 
console.log(flyingCar); // {wings:2, wheels:4} 

// Use the spread operator to add one or more members to an existing array: 
let veggies1 = ['onion', 'parsley']; 
veggies1 = [...veggies,'carrot', 'beetroot']; 
console.log(veggies1);  // ['onion', 'parsley', 'carrot', 'beetroot'] 

// Convert a string to an array using the spread operator 
const greeting = "Hello"; 
const arrayOfChars = [...greeting]; 
console.log(arrayOfChars); // ['H', 'e', 'l', 'l', 'o'] 

// Copy either an object or an array into a separate one 

const car1 = {
    speed:200, 
    color: 'yellow'
}
const car2 = {...car1} 
car1.speed = 201 
console.log(car1.speed, car2.speed)  // 201, 200 

// Copy into completely separate array using spread operator 
const fruits2 = ['apples', 'pears'] 
const fruits3 = [...fruits2] 
fruits1.pop() 
console.log(fruits2, "not", fruits3)  // ['apples'] 'not' ['apples', 'pears'] 













