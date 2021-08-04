function displayType(soup) {//Function to output the soup for the clickable "bowls"
    var soupType = soup.getAttribute("data-soup-type");
    alert(soupType + " is great when eaten out of a " + soup.innerHTML +".")
}