let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let mySelect = document.getElementById("mySelect");
for(let i = 0; i < countries.length; i++){
    if(mySelect.querySelectorAll('option[value="' + countries[i] + "\"]").length == 0) {
        let selections = document.createElement("option");
        selections.textContent = countries[i];
        selections.value = countries[i];
        mySelect.appendChild(selections);
}};
mySelect.addEventListener("change", fuction())
    alert(mySelect.selected);
