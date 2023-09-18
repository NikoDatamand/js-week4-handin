const names = ["Mette", "Lars", "Jacob"];
const nameForm = document.getElementById("nameForm");
const newNameInput = document.getElementById("newName");
const ul = document.getElementById("nameList");
const removeFirstButton = document.getElementById("removeFirst");
const removeLastButton = document.getElementById("removeLast");

function createList() {
    ul.innerHTML = ""; 
    names.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name; 
        ul.appendChild(li);
    });
}

createList(); 

nameForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const newName = newNameInput.value;
    names.push(newName);
    createList(); 
    newNameInput.value = ""; 
});

removeFirstButton.addEventListener("click", function() {
    if (names.length > 0) {
        names.shift();
        createList(); 
    }
});

removeLastButton.addEventListener("click", function() {
    if (names.length > 0) {
        names.pop(); 
        createList(); 
    }
});