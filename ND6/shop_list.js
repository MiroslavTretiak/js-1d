// Pasiimame HTML elemtus iš DOM pagal ID
const addBtn = document.getElementById("add_task");      //<button>
const list = document.getElementById("tasks_list");      // <ul> - elementas
const xInput = document.getElementById("x");  // <input>
const yInput = document.getElementById("y");  // <input>
const clearTasks = document.getElementById("clear_tasks"); // <button> - išvalyti visą sąrašą


// Kintamasis kuriame saugomos užduotys
let prekes = [];


// atvaizduoja masyvą kaip sąrašą
const showTasks = () => {
    //Išvalome buvusi sąrašą
    list.innerHTML = "";

    //Su kiekviena užduotimi atliksime veiksmą
    //Kinamasis t - masyvo elemantas, index - indeksas
    prekes.forEach((t, index) => {
        // Sukuriam naują objektą (HTMLElement klasės)
        const newTask = document.createElement("li");

        // Objekto atributam priskirame reikšmes
        newTask.className = "list-group-item";
        newTask.textContent = `${t.pavadinimas} ${t.kiekis}`;

        // Sukuriam trinimo btn kiekvienam naujam elementui
        const deleteButton = createDeleteButton();

        // Pridedame event listener btn
        deleteButton.addEventListener("click", () => {
            // Iskvieciame trinimo funkcija
            deleteTask(index);
        });

        // Pridedame trinimo mygtuka prie elemento
        newTask.appendChild(deleteButton);

        // Naują objektą patalpiname į DOM (sarašo apačią)
        list.appendChild(newTask);
    });
}

const addTask = () => {

    //Pasiimame užduoties pavadinimą
    const textX = xInput.value;
    const textY = yInput.value;

    const task = { pavadinimas: textX, kiekis: textY };
    //Išsaugome užduotį masyve
    prekes.push(task);

    //Išvalome buvusią formą
    xInput.value = "";
    yInput.value = "";
    //Atvaizduojami įrašai
    showTasks();

    //Išsaugoti į localstorage
    localStorage.setItem("prekes", JSON.stringify(prekes));
}

const clearList = () => {
    //Išvalome masyvą
    prekes = [];

    //Išvalome localstorage
    localStorage.removeItem("prekes");

    //Atvaizduoti iš naujo
    showTasks();
}
const createDeleteButton = () => {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger btn-sm float-end";
    return deleteButton;
}
const deleteTask = (index) => {
    // Pasalinti preke pagal nurodyta indexa
    prekes.splice(index, 1);
    // Atnaujinti prekes
    showTasks();
    // atnaujinti localStorage
    localStorage.setItem("prekes", JSON.stringify(prekes));
}
addBtn.onclick = addTask;
clearTasks.onclick = clearList;

//Pasiimame iš localstorage informaciją
const lsTasks = localStorage.getItem("prekes");

//Patikriname ar localstorage buvo kintamasis tasks
if (lsTasks != null) {
    prekes = JSON.parse(lsTasks);
    //Jei kintamasis egzistavo, tuomet atvaizduojame užduotis
    showTasks();
}