// Your code here
//task deletion

let rToDo = document.querySelectorAll(".fa-trash");
rToDo.forEach(element => {
    element.addEventListener("click", (e)=>{
        e.parentNode.removeChild(e)
    })
});

//add task
let addBtn = document.createElement("button")
addBtn.innerHTML = "add";
addBtn.name = "Add";
document.body.appendChild(addBtn)
let addToDo = document.getElementById("addToDo");
addBtn.addEventListener("click", "li", ()=>{
    let newLi = document.createElement("li")
    newLi.innerHTML=addToDo.value;
    let newI = document.createElement("i");
    newI.classList.add("fa","fa-trash");
    let ul = document.querySelector("ul");
    ul.appendChild(newLi);
})