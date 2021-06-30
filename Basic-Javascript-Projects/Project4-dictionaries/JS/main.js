function my_Dictionary() { //A funmction that outputs a Key-Value pair into an HTML Element.
    var Animal = { 
        Species:"Chinchilla",
        color: "Grey",
        Name: "Daisy",
        Age: "7",
        Sound: "Screech!"
    };
    delete Animal.Age; // Deletes Daisy's Age in the dictionary
    document.write(Animal.Age); //Clicking "Click Me!" on the page will output this vaule which should be undefined. 
}