// Your code here
//task deletion

let rToDo = document.querySelectorAll(".fa-trash");
rToDo.forEach(element => {
    element.addEventListener("click", (e)=>{
        e.parentNode.removeChild(e)
    })
});

//add task

let addToDo = document.getElementById("addToDo");
let ul = document.querySelector("ul");
addToDo.addEventListener("keypress", (enter)=>{
    if(enter.key == "Enter"){
        let newSpan = document.createElement("span");
        let newLi = document.createElement("li");
        let newI = document.createElement("i");
        newI.classList.add("fa","fa-trash");
        newSpan.appendChild(newI);
        newLi.appendChild(newSpan);
         ul.appendChild(newLi);
        newLi.insertAdjacentHTML("beforeend",addToDo.value);
    }
})
