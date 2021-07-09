let str = "French Onion Soup"
console.log(str.length); //Will print 17 to console because the str is 17 characters long

var X = 82;//Global Scope for X
console.log(X); // Will print 82 in console
{
    let X = 33; //Let makes the variable local to the block scope.
    console.log(X); //Will print 33 in console because it will use the local var X. 
}
console.log(X); //Will print 82 in console because it looks at the Global var X. 

function returnFunction() { //Function to return a value. 
    return Math.PI; 
}
document.getElementById("Return").innerHTML = returnFunction();

 

function While_Loop() { //While loop function
    var Digit ="";
    var X = 1;
    while(X<301) {
        Digit += "<br>" + X;
        X++;   //While X is less than 301, add one
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //Dictionary for all instrument names
var Content = "";
var Y;
function for_Loop() { //For loop function
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"; //This will print out one instrument and put a break until all intruments have been listed. 
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() { //Array Function
    var Cat_Picture = [];
    Cat_Picture [0] = "sleeping";
    Cat_Picture [1] = "playing";
    Cat_Picture [2] = "eating";
    Cat_Picture [3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture [2] + "."; //eating prompt will be called
}

function constant_function() {//Constant function
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}; // Default values for the constant musical instrument.
    Musical_Instrument.color="blue"; //Reassigns the color of the const. 
    Musical_Instrument.price="$1300"; //Adds price to the array.
    Musical_Instrument.accessories="rainbow pick"; 
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price + ", and it came with a " +
    Musical_Instrument.accessories +".";
}

let car = {//Defining a car object
    make: "Mazda ",
    model: "Six ",
    year: "2008 ",
    color: "Burgundy ",
    description : function() {//function to build the oject
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

const cars = ["Mazda", "Audi", "Mitsubishi", "Honda"];
let text = "";//starts with an empty list

list: {
    text += cars[0] +"<br>"; //adds Maxda to the list for the variable "text" from the array
    break list; //This will cancel the other 3 vehicles from being added to the list. 
    text += cars[1] +"<br>"; //adds Audi to the list for the variable "text" from the array
    text += cars[2] +"<br>"; //adds Mitsubishi to the list for the variable "text" from the array
    text += cars[3] +"<br>"; //adds Honda to the list for the variable "text" from the array
}

document.getElementById("list").innerHTML = text;

function continueWhile_Loop() { //While loop function that uses a continue statement
    var Num ="";
    var X = 1;
    while(X<301) {
       Num += "<br>" + X
       X++;   //While X is less than 301, add one
       if (X === 5) { continue;
    }
    document.getElementById("Continue-Loop").innerHTML = Num;
    }
}//Should count to 300