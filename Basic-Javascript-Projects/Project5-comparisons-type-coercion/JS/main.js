document.write(typeof "500"); // Determines if a string
document.write(540 + "500");// Because "500" is a string, it will print 540500 instead of adding integers.
document.write(2e350); // Writes infinity
document.write(-5e3151);// Writes negative infinity
document.write(10>2); 
document.write(15<4);
document.write(10 == 10); // == checks if both integers are equal
document.write(3 == 11);
document.write(5>2 && 10>4); // And
document.write(5>10 && 10>4);
document.write(5>2 || 10>4); // Or
document.write(5>10 || 10>20);

console.log('Hello World'); 
console.log(10<1);
console.log(10==='10');

function Naanbread() {
    document.getElementById('nan').innerHTML = 0/0; //results in NaN since 0/0 is not defined
}

function is_Naanbread1() {
    document.getElementById('nan1').innerHTML = isNaN('String');  // determines if not a number, will be true because 'string' is not a number. 
}

function is_Naanbread2() {
    document.getElementById('nan2').innerHTML = isNaN('100');// will be true because the apostrophes make '100' a string
}
function not_Function() {
    document.getElementById('not').innerHTML = !(500>10);// Determines if the logic is not true. This will result in a false because 500 is greater than 10
}
function not_Function1() {
    document.getElementById('not1').innerHTML = !(6>10);// will result in true because 6 is not greater than 10. 
}