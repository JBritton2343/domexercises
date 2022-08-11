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
        let newLi = document.createElement("li")
    newLi.innerHTML=addToDo.value;
    let newI = document.createElement("i");
    newI.classList.add("fa","fa-trash");
    newLi.appendChild(newI);
    ul.appendChild(newLi);
    }
})