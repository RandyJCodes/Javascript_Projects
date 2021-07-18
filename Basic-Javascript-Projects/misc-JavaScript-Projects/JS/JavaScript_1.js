function colorFunction() { //Switch Statement Function
    var Color_Output;
    var Colors = document.getElementById("Color-Input").value;
    var Color_String = " is a great color choice!";
    switch(Colors) {
        case "Amaranth":
            Color_Output = "Amaranth" + Color_String;
        break; //stops the loop
        case "Skobeloff":
            Color_Output = "Skobeloff" + Color_String;
        break;
        case "Razzmatazz":
            Color_Output = "Razzmatazz" + Color_String;
        break;
        case "Mikado":
            Color_Output = "Mikado" + Color_String;
        break;
        case "Wenge":
            Color_Output = "Wenge" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function helloworldFunction() {
    var A = document.getElementsByClassName("Class");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("ID");
var ctx = c.getContext("2d");

// Create gradient, sets color of bg and shadow color
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "white");

// Determines how the gradient fills the canvas.
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);