/*
Užduotis 2
Faile pateikti skaičiai (sveikieji, iš intervalo nuo 0 iki 9),
 parašykite JS programą kuri suskaičiuotų kiek ir kokių skaičių
 yra tekstiniame faile.
*/

const fs = require("fs");
let data = fs.readFileSync("masyvas2.csv").toString().split("");
const numbers = {};


for (let i = 0; i < data.length; i++) {
    const x = data[i];
    if (x !== ' ') {
        numbers[x] = (numbers[x] || 0) + 1;
    }
}
for (const number in numbers) {
    console.log(`${number} = ${numbers[number] || 0}`);
}

/*
const mas = Array(10).fill(0);
data.forEach((x) => mas[x]++);
mas.forEach((d, i) => console.log(`[${i}] => ${d}`));
*/