// Task 1

var dairy = ['cheese', 'sour cream', 'milk', 'yoghurt', 'ice cream', 'milkshake']
function logDairy(){
    dairy.forEach((dairy_item) => {
        console.log(dairy_item);
    });
}

logDairy(); 
// Task 2
const animal = {
    canJump: true
}; 

const bird = Object.create(animal); 
bird.canFly = true; 
bird.hasFeatures = true; 

function birdCan(){
        for (const prop in bird){
            if (Object.hasOwnProperty(bird, prop)) {
            console.log(`${prop} : ${bird[prop]}`); 
        }
      }
}

birdCan(); 

// Task 3
function animalCan(){
    for (const prop in bird){
        console.log(`${prop} : ${bird[prop]}`); 
    }
}
animalCan(); 