let button = document.querySelector("#superDuperButton");
let ul = document.querySelector('#myList')
button.addEventListener("click", function() {
	//your code here
	
	let li = document.createElement("li");
	li.appendChild(document.createTextNode("Fourth Element"))
	ul.appendChild(li);
	
});
