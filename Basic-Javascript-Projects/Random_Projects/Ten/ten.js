function count_To_Ten() {
    var Digit ="";
    var X = 1;
    while(X<11) {
        Digit += "<br>" + X;
        X++;   //While X is less than 11, add one
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}