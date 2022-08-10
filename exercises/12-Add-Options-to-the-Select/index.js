let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let countrySelect = countries;
let select = document.getElementById("#mySelect")
select.appendChild(countries);
select.addEventListener(onchange, countrySelect);{
    alert(countries.select);
};