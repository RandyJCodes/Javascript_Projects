function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<55) ? "You are too short":"You are tall enough"; //Ternary Operator
    document.getElementById("Ride").innerHTML = Can_ride +" to ride.";
}
function Vehicle(Make, Model, Year, Color) { //Constructor function for cars
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicl_Color = Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red"); 
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function carFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color +"-colored "+ Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
} 
// Constructor function for Person objects
function Person(first, last, age, eye) { 
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
var Randy = new Person("Randy", "Jackson", 25, "Brown") // Define Var for Randy
function personFunction(){
    document.getElementById("New_and_This").innerHTML =
    "Randy is " + Randy.age + " years old.";
}
function countFunction() { //Function for counting
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() { 
        var Starting_point = 9; //define starting point
        function Plus_two() {Starting_point += 2;} //add two to the starting point defined
        Plus_two(); // Nested function that will add 1 to the starting point
        return Starting_point; //redefine's the starting point. 
    }s
}