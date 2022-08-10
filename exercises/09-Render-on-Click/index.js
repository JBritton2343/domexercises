let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let el = document.createElement("div");
	el.style.background="Yellow";
	el.innerHTML="Hello World";
	document.body.appendChild(el);
});