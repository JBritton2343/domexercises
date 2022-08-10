let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let ul = document.getElementById("#myList");
	let li = document.createElement("li");
	li.appendChild(document.createTextNode("Fourth Element"));
	ul.appendChild(li);
});
