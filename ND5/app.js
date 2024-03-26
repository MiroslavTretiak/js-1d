const xInput = document.getElementById("m");
const yInput = document.getElementById("i");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");

const skaiciuoti = () => {
    const m = xInput.valueAsNumber;
    const i = yInput.valueAsNumber;
    const kmi = (m / ((i / 100) ** 2)).toFixed(2);
    rez.innerHTML = `Jūsų KMI yra: ${kmi}`;
}

btn.onclick = skaiciuoti;