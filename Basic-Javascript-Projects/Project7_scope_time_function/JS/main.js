var X = 50; //Global Variable
function addnumbersFunction1() { 
    document.write(100 + X +"<br>"); //Adds 100+50 and puts a page break. 
}
function addnumbersFunction2() {
    document.write(X+1000);
} 
addnumbersFunction1();//Var X is global so the result of 100+50 makes X turn to 150.
addnumbersFunction2(); //Var X is global so it will add 1000+50 which makes 1050.


function addnumbersFunction3() { 
    var Y = 40; //Local Variable
    console.log(100 + Y); //Adds 100+40 and puts it in the console.
}
function addnumbersFunction4() {
    console.log(Y+1000); //Y is a local variable so this will not display a result. 
    //Used console.log and it tells us that Y is not defined which is true because it is a local variable for addnumbersFunction3().
} 
addnumbersFunction3();//Var Y is local so the result of 100+50 makes Y turn to 150 locally and display on console log. 
addnumbersFunction4(); //Var Y is not defined in this function, this will result in an error in console log. 

function getDate() { //If Function
    if(new Date().getHours() < 23) {
        document.getElementById("Greeting").innerHTML = "How are you today?"; // if the time is less than 23:00, this will display "How are you today?"
    }
}

function getFalse() { //If Function
    if(9 < X) {
        document.getElementById("False").innerHTML = "Nice"; //X globally is 50. 9 is less than 50 so the button will print "nice"
    }
}

function ageFunction() {// If Else Function
    Age = document.getElementById("Age").value; // Grabs the value input by the user for id="Age"
    if (Age >= 18) {  //if the user inputs 18 or more, the result will be "You are old enough to vote!"
        Vote = "You are old enough to vote!"; 
    }
    else { //everything else includes all numbers 17 or less
        Vote = "You are not old enough to vote!"; //if the user inputs 17 or less, they will get a message that says "You are not old enough to vote!"
    }
    document.getElementById("person-age").innerHTML = Vote;
}

function heightFunction() {// If Else Function
    Height = document.getElementById("Height").value; // Grabs the value input by the user for id="Height"
    if (Height >= 55) {  //if the user inputs 55 or more, the result will be "You are old tall enough for this ride!"
        Ride = "You are tall enough for this ride!"; 
    }
    else { //everything else includes all numbers less than 55.
        Ride = "You are not tall enough for this ride!"; //if the user inputs anything less than 55, they will get a message that says "You are not tall enough for this ride!"
    }
    document.getElementById("person-height").innerHTML = Ride;
}

function timeFunction() { // Else if Function
    var Time = new Date().getHours(); //Grabs time from local machine
    var Reply;
    if (Time < 12 == Time > 0) { //if statement for if the time is less than 12 but also greater than 0, it is going to print "It is Morning". 
        Reply = "It is Morning.";
    }
    else if(Time >= 12 == Time < 18) {// So long as the Time is greater than or equal to 12, but less than 18, it will print "It is afternoon."
        Reply = "It is afternoon.";
    }
    else {//If it is 18, but less than 0(in the case of time 23:59), it will print that it is evening. 
        Reply= "It is evening time.";
    }
    document.getElementById("Time-of-day").innerHTML = Reply;
}
