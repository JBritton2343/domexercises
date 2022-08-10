let myString = "<p>Hello!</p> <strong>My friend</strong> <p>we are in the year </p>"
const currentDate = date();
const year = currentDate.getFullYear()
myString.concat(year) 

document.write(myString);
