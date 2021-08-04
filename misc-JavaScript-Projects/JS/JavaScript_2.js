function validateForm() { //Will return an alert if the form is completely empty. 
    let x = document.forms["myForm"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }