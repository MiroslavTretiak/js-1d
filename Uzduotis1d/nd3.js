/*
    Užduotis 3(IF - 2):
Elektroninis laikrodis rodo laiką: valandas, minutes ir sekindes
(įvedami skaičiai h, m, s).Kiek laiko laikrodis rodys po sekundės ?
 (Išveskite h, m, ir s). Visi skaičiai įvedami kkaip parametrai(h, m, s).
*/

const h = Number(process.argv[2]);
const m = Number(process.argv[3]);
const s = Number(process.argv[4]);
let sum = 0;

if (h > 0) {
    sum += h * 3600
}
if (m > 0) {
    sum += m * 60;
}
if (s > 0) {
    sum += s + 1;
}

const h1 = Math.floor(sum / 60 / 60);
console.log(h1);
const m1 = Math.floor(sum / 60) - (h1 * 60);
console.log(m1);
const s1 = sum % 60;
console.log(s1);


