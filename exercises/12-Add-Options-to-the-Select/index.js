let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let mySelect = document.getElementById(mySelect);
for(let i = 0; i < countries.length; i++){
    let select = document.createElement("option");
    select.textContent(countries[i]);
    mySelect.appendChild(selected);
};
mySelect.addEventListener("change", fuction())
    alert(mySelect.selected);
