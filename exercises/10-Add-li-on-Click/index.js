let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	addElement = function(){
	let ul = document.getElementById("myList");
	let li = document.createElement("li");
	let child = ul.children.length+1;
	li.setAttribute("id" , "fourth element" + child);
	li.appendChild(document.createTextNode("Fourth Element"+child));
	ul.appendChild(li);
	}
});
