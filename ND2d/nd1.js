/*
Užduotis 1
Faile pateiktos dienos oro temperatūros. Parašykite programą kuri
 surastų ir išvestų didžiausią ir mažiausią temperatūrą, bei dienas
 kuriomis buvo šios temperatūros.
Failo pavyzdys:
1 2 7 3 4 6 -1 2 4 -3 -3 -5 1 5 6 7 5 9 2 3 6 7 8 6 3 6 7 5 6 7 1
*/

const fs = require("fs");
let data = fs.readFileSync("masyvas1.csv").toString().split(" ");

let max = 0;
let min = 0;
let counterMaxD = 0;
let counterMinD = 0;

data.forEach((x) => {
    if (max < x) {
        max = x
        counterMaxD = data.indexOf(x);
    } else if (min > x) {
        min = x
        counterMinD = data.indexOf(x);
    }

});
console.log(`Max temp buvo: ${max} laipsniu ${counterMaxD + 1} diena. \nMin temp buvo: ${min} laipsniu ${counterMinD + 1} diena.`);
