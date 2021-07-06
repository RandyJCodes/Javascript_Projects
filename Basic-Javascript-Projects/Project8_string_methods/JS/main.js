function fullsentenceFunction() { //this will concatenate variables into a full sentence
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //Concatenates the variables.
    document.getElementById("Concatenate").innerHTML = whole_sentence;//Prints all of the variables in the correct order to print the sentence "I have made this into a complete sentence."
}

function sliceFunction() { //Slice function
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27,33) //Characters 27-33 will be cut out and displayed
    document.getElementById("Slice").innerHTML = Section;
}

function sliceFunction1() { //Slice function
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27,33) //Characters 27-33 will be cut out and displayed
    document.getElementById("Slice1").innerHTML = Section.toUpperCase();//turns it uppercase using the toUpperCase() Method.
}

function sliceFunction2() { //Slice function
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.search("Johnny");//the search method, .search(), will search for the word "Johnny" in the Sentence Variable.
    document.getElementById("Slice2").innerHTML = Section;//this will display 27 because the search method prints the position of the first letter of the name "Johnny". 
}

function stringmethodFunction() {
    var X = 644;
    document.getElementById("Numbers-to-string").innerHTML = X.toString();//will print 644 because X has been defined as 182
}

function precisionmethodFunction() {//Precision Method Function
    var X = 12.4545617877512;
    document.getElementById("Precision").innerHTML = X.toPrecision(8);// Output will be 12.454562 because it only grabs the first 8 digits of Var X and the result will be rounded. 
}

function fixedmethodFunction() {
    var X = 12345.4545617877512;
    document.getElementById("Fixed").innerHTML = X.toFixed(2); //output will fix to the 1/100th place. 
}

function valuemethodFunction() {
    var X = 12345.4545617877512;
    document.getElementById("Value").innerHTML = X.valueOf(X); //output will be 12345.4545617877512
}