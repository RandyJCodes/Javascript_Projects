function Multiply(p1, p2) { // Multiply function for numbers - onclick
    return p1 * p2;
  }
  function Subtract(p1, p2) { // Subtract function for numbers - onclick
    return p1 - p2;
  }
  function Addition(p1, p2) { // Addition function for numbers - onclick
    return p1 + p2;
  }
  function Division(p1, p2) { // Division function for numbers - onclick
    return p1 / p2;
  }

  function some_Math() { // Writes out the answer to a simple math equation
    var simple_math = (1+2) * 10 / 2 - 5;
    document.write(simple_math);
  }

  function Remainder() { // A function that prints the remainder of 25/6
    var simple_math = 25 % 6;
    document.write(simple_math);
  }

  function negation_operator() { //A function that prints out negative variable x
    var x= 10;
    document.write(-x);
  }
function Click1(){ //Function made for a click event that utilizes the ++ Operator
  var X = document.getElementById("click1");
  var X = 5;
  X++;
  document.write(X);
}

function Click2(){ //Function made for a click event that utilizes the -- Operator
  var X = document.getElementById("click2");
  var Y = 5.25;
  Y--;
  document.write(Y);
}

 document.write(Math.pow(2, 10)); //displays 2^10 at the top of the page

 window.alert(Math.random()*100); //Alert box that will have a random number display between 0 and 100