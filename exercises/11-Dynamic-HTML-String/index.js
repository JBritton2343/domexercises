let myString = "<p>Hello!</p> <p><strong>My friend</strong> we are in the year </p>"
let date = new Date();
let year = date.getFullYear();
let string2 = year.concat(myString)
document.write(string2);