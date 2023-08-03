/* Adding methods to classes */ 

class Train {
    constructor(color, lightsOn){
        this.color = color; 
        this.lightsOn = lightsOn; 
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn; 
    }
    lightsStatus(){
        console.log('Lights on?', this.lightsOn); 
    }
    getSelf(){
        console.log(this); 
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this)
        console.log(proto); 
    }
}

var train4 = new Train('red', false); 
// This object gets returned only with the properties "data" that was built using the constructor() function of the Train class. 
// All the methods on the Train class do not "live" on any of the instance objs of the Train class - instead, they live on the prototype! 

train4.toggleLights(); //undefined
train4.lightsStatus(); //Lights on? true 
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, lightsStatus: f, getSelf: f, getPrototype: f}

/* 
There are 4 methods on your Train class: toggleLights(), lightsStatus(), getSelf(), getPrototype() 
1. toggleLights() method -- uses not operator `!`. This operator will change the value stored in lightsOn property 
    of the future instance object of teh TRain class; hece the !this.lightsOn. 
    This means that this.lightsOn will become the new vvalue of your lightsOn property on the given instance object. 

2. lightsStatus() method on the Train class just reports the current status of the lightsOn variable of a given object 
    instance. 

3. getSelf() method prints out properties on the object instance. 

4. getPrototype() console logs the prototype of the object instance of the Train class. It holds all properties shared by all the 
    object instance of the Train class. To get the prototype, use JS built-in Object.getPrototype() method, and passing it this object 
    -- meanin, the object instance inside of which this method is invoked. 

    Here, the result of calling the getPrototype() method is the console logging of all the properties on the prototype. 
    When the class syntax is used in JS, this results in only shared methods being stored on the prototype, while the constructor() function sets up 
    the mechanism for saving instance-specific values ("data") at the time of object instantiation. 


To conclude, class syntax in JS allows us to clearly separate individual object's data -- which exists on object instance itself -- from the shared object's 
functionality (methods), which exist on the prototype and are shared by all object instances. 
*/ 


// ------------------- ADD Polymorphism using classes in JS ---------------------------------- // 


class HighSpeedTrain extends Train {
    // Makes the Train class a base class, or super-class of HighSpeedTrain class 
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn); //inherits properties from Train class 
        this.passengers = passengers; 
        this.highSpeedOn = highSpeedOn; 
    }

    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn; 
        console.log('High speed status:', this.highSpeedOn); 
    }

    // Modifying existing toggleLights method function 
    toggleLights(){
        super.toggleLights(); 
        super.lightsStatus(); 
        console.log('Lights are 100% operational.'); 
    }
}

var train5 = new Train('blue', false); 
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false); 

train5.toggleLights();      //undefined 
train5.lightsStatus();      // Lights on? True 

highSpeed1.toggleLights();   // Lights on? true, lights are 100% operational. 

train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}


// ---------------------Using class instance as another class' constructor's property----------------------------------- // 

class StationaryBike {
    constructor(position, gears){
        this.position = position 
        this.gears = gears 
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position 
        this.modes = modes 
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmilPos){
        this.openHrs = openHrs
        this.StationaryBike = new StationaryBike(stationaryBikePos, 8) 
        this.treadmill = new Treadmill(treadmilPos, 5)
    }
} 

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs)          //7-22
console.log(boxingGym.StationaryBike)   //StationaryBike { position: 'right corner', gears: 8 }
console.log(boxingGym.treadmill)        //Treadmill { position: 'left corner', modes: 5 }



// ----------------- Default params ------------------- // 

function noDefaultParams(number){
    console.log('Result:', number*number)
}
function withDefaultParams(number = 10){    //will run with default arg values
    console.log('Result:', number*number)
} 

noDefaultParams();  //Result: NaN

class noDefaultParams {
    constructor(num1, num2, num3, string1, bool1){
        this.num1 = num1; 
        this.num2 = num2; 
        this.num3 = num3; 
        this.string1 = string1; 
        this.bool1 = bool1; 
    }
    calculate(){
        if  (this.bool1){
            console.log(this.string1, this.num1 + this.num2 + this.num3); 
            return; 
        } 
            return "The value of bool1 is incorrect."
    }
}


var fail = new noDefaultParams(1,2,3,false); 
fail.calculate(); // 'The value of bool1 is incorrect' 

/* improving the above example with default params */ 


class withDefaultParams {
    constructor(num1=1, num2=2, num3=3, string1 = "Result:", bool1=true){
        this.num1 = num1; 
        this.num2 = num2; 
        this.num3 = num3; 
        this.string1 = string1; 
        this.bool1 = bool1; 
    }
    calculate(){
        if(this.bool1){
            console.log(this.string1, this.num1 + this.num2 + this.num3); 
    }
        return "The value of bool1 is incorrect."
    } 
}


var better = new withDefaultParams(); 
better.calculate();     //Result: 6 


