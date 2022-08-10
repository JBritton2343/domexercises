let myString = "<p>Hello!</p> <p><strong>My friend</strong> we are in the year </p>"
document.write(myString);
let date = new Date();
let year = date.getFullYear();
let string2 = myString.concat(year)
document.write(string2);