let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let mySelect = document.getElementById(mySelect);
for (let i = 0; i < countries.length, i++){
    let selected = document.createElement("option");
    selected.textContent(countries[i]);
    mySelect.appendChild(selected);
}