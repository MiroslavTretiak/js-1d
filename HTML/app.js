const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");

const skaiciuoti = () => {
    const x = xInput.valueAsNumber;
    const y = yInput.valueAsNumber;
    if (isNaN(x) || isNaN(y)) {
        rez.innerHTML = 'Ivesti skaiciai nera teisingi'
    } else {
        const sum = x + y;
        let alertClass = "";
        //stilizuotas isvedimas
        if (sum > 100) {
            alertClass = "alert-danger"
        } else {
            alertClass = "alert-success"
        }
        rez.innerHTML = `<div class="alert ${alertClass}" role="alert">
  Rezultatas: ${sum}
</div>`;
    }
    //formos isvalymas
    xInput.value = "";
    yInput.value = "";
}

btn.onclick = skaiciuoti;