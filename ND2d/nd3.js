/*
Užduotis 3
Faile pateikiami duomenys masyvas turintis 4,4 elementų. Pavyzdžiui:
1 2 3 5
5 4 4 7
3 2 1 9
2 3 4 5
Parašykite programą kuri apverstų (pasuktų) masyvą,
rezultatas atvaizduojamas ekrane:
1 5 3 2
2 4 2 3
3 4 1 4
5 7 9 5
*/

const fs = require("fs");
let data = fs.readFileSync("masyvas3.csv").toString().split("\r\n");

let x = [];
data.forEach((l) => {
    x.push(l.split(' '));
}); ``
console.log(x);
for (let i = 0; i < data.length; i++) {
    let s = "";
    for (let k = 0; k < data[i].length; k++) {
        s += `${x[k][i]}`;
    }
    console.log(s);
}



