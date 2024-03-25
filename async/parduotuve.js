const fs = require('fs');
let str = fs.readFileSync("data.json").toString();

const sandelys = JSON.parse(str);

//console.log(sandelys);

sandelys.forEach((preke) => {
    let suma = 0;
    preke.kiekis_sandelyje.forEach((kiekis) => {
        suma += kiekis;
    });
    console.log(`${preke.pavadinimas}, kaina: ${preke.kaina} EUR, kiekis: ${suma}`);
});