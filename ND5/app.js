const mInput = document.getElementById("m");
const iInput = document.getElementById("i");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");

const skaiciuoti = () => {
    const m = mInput.valueAsNumber;
    const i = iInput.valueAsNumber;
    if (isNaN(m) || isNaN(i)) {
        rez.innerHTML = 'Ivesti skaiciai nera teisingi'
    } else {
        const kmi = (m / ((i / 100) ** 2)).toFixed(2);
        rez.innerHTML = `Jūsų KMI yra: ${kmi}`;
    }
}

btn.onclick = skaiciuoti;