let myString = "<p>Hello!</p> <strong>My friend</strong>";
document.write(myString);
let newString = "<p>We are in the year</p>"
let year = Date.prototype.getFullYear();
let mySecondString = newString.concat(year)
let myString2 = myString.concat(mySecondString)
document.write(myString2);