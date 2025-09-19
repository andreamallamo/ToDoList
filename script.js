const newField = document.getElementById('newField');
const addBtn = document.getElementById('add');
const tasks = document.getElementById('tasks');

checkList();

addBtn.addEventListener("click", function () {

    if(newField.value !== ""){

        const emptyText = document.getElementById("emptyText");
        if(emptyText){
            emptyText.remove();
        }

        // creo contenitore padre
        const parentDiv = document.createElement("div");
        parentDiv.setAttribute("class", "w-full bg-white p-3 rounded shadow flex place-content-evenly gap-2");
        
        // creo contenitore testo
        const taskDiv = document.createElement("div");
        taskDiv.setAttribute("class", "w-11/12 flex items-center");

        // creo contenitore button
        const btnDelete = document.createElement("button");
        btnDelete.setAttribute("class", "w-auto bg-red-600 p-2 text-white text-bold rounded flex items-center");
        
        // Aggiungi funzione elimina task
        btnDelete.addEventListener("click", function() {
            parentDiv.remove();
            checkList();
        });

        // Creo icona trash
        const trashIcon = document.createElement("i");
        trashIcon.setAttribute("class", "fa-solid fa-trash-can");

        // recupero testo nuova task
        const textTask = document.createTextNode(newField.value); 

        // Costuisco elemento
        taskDiv.appendChild(textTask); // aggiungo testo al div
        btnDelete.appendChild(trashIcon); // aggiungo icona al pulsante
        parentDiv.appendChild(taskDiv); // aggiungo div testo al div padre
        parentDiv.appendChild(btnDelete); // aggiungo pulsante al div padre
        tasks.appendChild(parentDiv); /// aggiungo div task completa all'elenco tasks

        newField.value = "";

    }
    else{
        alert('Devi inserire il testo');
    }

    checkList();
});

function checkList(){

    if(tasks.innerHTML === ""){
        const newSpan = document.createElement("span");
        const text = document.createTextNode("Non hai nulla da fare...");
        newSpan.setAttribute("id", "emptyText")
        newSpan.appendChild(text);
        tasks.appendChild(newSpan);
    }   
}