/*                Animal 
                    |
            |               |
            Cat             Bird 
        |          |        | 
    HouseCat      Tiger     Parrot

*/ 

class Animal {
    constructor(color='yellow', energy=100) {
        this.color = color; 
        this.energy = energy; 
    }
    isActive(){
        if(this.energy >0){
            this.energy -= 20; 
            console.log('Energy is decreasing, currently at:', this.energy); 
        } else if(this.energy==0){
            this.sleep(); 
        }
    }
    sleep(){
        this.energy += 20; 
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor(){
        console.log(this.color); 
    }
}

class Cat extends Animal {
    constructor(sound='purr', canJumpHigh=true, canClimbTrees=true, color, energy){
        super(color, energy); 
        this.sound = sound; 
        this.canJumpHigh = canJumpHigh; 
        this.canClimbTrees = canClimbTrees; 
    }
    makeSound(){
        console.log(this.sound); 
    }
}

class Bird extends Animal {
    constructor(sound='chirp',canFly=true, color, energy ){
        super(color, energy); 
        this.sound = sound; 
        this.canFly = canFly;
    }
    makeSound(){
        console.log(this.sound); 
    }
}

class HouseCat extends Cat {
    constructor(houseCatsound='meow', sound, canJumpHigh, canClimbTrees, canFly, color, energy){
        super(sound, canJumpHigh, canClimbTrees,color,energy); 
        this.houseCatsound = houseCatsound; 
        this.canFly = canFly; 
    }
    makeSound(option){
        if(option){
            super.makeSound(); 
        }
        console.log(this.houseCatsound); 
    } 
}

class Tiger extends Cat {
    constructor(tigerSound='Roar!', sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound,canJumpHigh,canClimbTrees,color,energy); 
        this.tigerSound = tigerSound; 
    }
    makeSound(option){
        if(option){
            super.makeSound(); 
        }
        console.log(this.tigerSound); 
    }
}

class Parrot extends Bird {
    constructor(canTalk=false, sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color,energy); 
        this.canTalk = canTalk; 
    }
    makeSound(option){
        if(option){
            super.makeSound(); 
        }
        if(this.canTalk){
            console.log("I'm a talking parrot!"); 
        }
    }

}


var polly = new Parrot(true); 
var fiji = new Parrot(false); 

polly.makeSound(); //'chirp' 
fiji.makeSound();  // 'chirp' 

polly.color; //yellow
polly.energy; //100 

polly.isActive(); //Energy is decreasing, currently at: 80 

var penguin = new Bird("shirek", false, "black and white", 200); 
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

console.log(penguin.sound); // 'shriek'
console.log(penguin.canFly); // false
console.log(penguin.color); // 'black and white'
console.log(penguin.energy); // 200
console.log(penguin.isActive()); // Energy is decreasing, currently at: 180

var leo = new HouseCat();
// leo, no purring please:
console.log(leo.makeSound(false)); // meow

// leo, both purr and meow now:
console.log(leo.makeSound(true)); // purr, meow

var cuddles = new Tiger();
console.log(cuddles.makeSound(false)); // Roar!
console.log(cuddles.makeSound(true)); // purr, Roar!

