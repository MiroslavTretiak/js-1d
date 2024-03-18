/*
Užduotis 1
Žinomi kambario matmenys: ilgis ir plotis. Abu dydžiai sveikieji skaičiai.
 Reikia apskaičiuoti, kokią pinigų sumą reiks mokėti už plyteles,
 skirtas kambario grindims kloti, jei plytelių vieno kvadrato kaina
 yra kaina taip pat įvedama (eurais). Plytelių reikia pirkti 5 proc.
  daugiau galimiems nuostoliams padengti.

Duomenys įvedami kaip parametrai (ilgis, plotis, kaina).
*/
/*
const prompt = require("prompt-sync")();
const ilgis = parseInt(prompt("Iveskit ilgi: "));
const plotis = parseInt(prompt("Iveskit ploti: "));
const kaina = parseInt(prompt("Iveskit plyteles kaina: "));

const plotas = (ilgis * plotis);
let kainaAll = kaina * plotas;
let antkainis = kainaAll * 0.05;
const galutineSuma = kainaAll + antkainis;
console.log(galutineSuma);
*/
/*
Užduotis 2
Parašykite programą, kuri suskaičiuotų stačiakampio,
 kurio viršutinio kairiojo taško (x1;y1) ir apatino dešiniojo taško (x2;y2)
 koordinatės sveikieji skaičiai, plotą s  ir perimetrą p.

Stačiakampio kraštinės lygiagrečios koordinačių ašims.
 Pvz.: x1=0, y1=5, x2=4, y2=0, tai s=20 ir p=18.

Duomeniss x1, y1, x2 ir y2 įveskite kaip parametrus.
*/
/*
const x1 = 0;
const y1 = 5;
const x2 = 4;
const y2 = 0;

const a = Math.abs(x2 - x1);
const b = Math.abs(y2 - y1);
const s = a * b;
const p = (a + b) * 2;

console.log(s)
console.log(p)
*/
/*
Užduotis 3
Studentas pradėjo rašyti programą, kai elektroninis laikrodis
 rodė h1 valandų ir min1 minučių, o baigė, kai buvo h2 valandų
 ir min2 minučių. Parašykite programą, pagal kurią būtų randama,
 kiek laiko (valandų ir minučių) studentas kūrė programą .

Duomenys įvedami kaip parametrai: h1, m1 ir h2, m2.
*/

const h1 = 13;
const m1 = 0;

const h2 = 14;
const m2 = 0;

const conv1 = h1 * 3600 + m1 * 60
const conv2 = h2 * 3600 + m2 * 60

const diff = conv2 - conv1;

const h = Math.floor(diff / 60 / 60);
const m = Math.abs(Math.floor(diff / 60));

console.log(h, m)
/*
Užduotis 4
Sukurkite programą trikampio plotui rasti. Trikampio kraštinės įvedamos
 klaviatūra, o programa turi išvesti rezultatą.

Duomenys įvedami kaip parametrai: a, b ir c.
*/

