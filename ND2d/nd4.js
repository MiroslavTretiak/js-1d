/*
1. Užduotis
Nuskaitykite į masyvą skaičius iš failo ir suskaičiuokite kiek
 iš viso šiame masyve yra lyginių ir nelyginių skaičių.
 Išveskite visus lyginius ir nelyginius skaičius.

Pavyzdžiui jei faile yra šie skaičiai: 5 8 7 2 3

Programa turi išvesti:

Lyginiai skaičiai: 8 2
Nelyginiai skaičiai: 5 7 3
*/

const fs = require("fs");
let data = fs.readFileSync("masyvas2.csv").toString().split(" ");
console.log(data);
console.log(typeof data)

const mas = [];
const mas2 = [];

data.forEach((x) => {
    if (x % 2 === 0) {
        mas.push(x);
    } else
        mas2.push(x);
});
console.log("Lyginiai:", mas.join(' '));
console.log("Nelyginiai:", mas2.join(' '));