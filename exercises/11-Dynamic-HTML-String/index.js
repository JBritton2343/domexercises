let myString = "<p>Hello!</p> <strong>My friend</strong> <p>we are in the year </p>";
let year = Date.prototype.getFullYear()
let myNewString = myString.concat(year)
document.write(myNewString);
