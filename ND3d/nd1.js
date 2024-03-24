/*
Faile studentai.json pateikiamas JSON formatu studentų sąrašas (masyvas),
 jų duomenys ir pažymiai. Nuskaitykite duomenis iš masyvo
 suskaičiuokite ir išveskite:
1. Studentų kiekį
2. Studentų amžiaus vidurkį
3. Studentų pažangumo vidurkį (visų pažymių vidurkį)
4. Išveskite studentų sąrašą ir kiekvieno studento vidurkį, pvz.:
Jonas Jonaitis 5.5
Petras Petraitis 9.3
*/

const fs = require("fs");
let str = fs.readFileSync("studentai.json").toString();
let studentas = JSON.parse(str);


let markSum = 0;
let ageSum = 0;
let count = 0;
let marksCount = 0;
studentas.forEach((student) => {
    ageSum += student.amzius;
    count++
    student.pazymiai.forEach((mark) => {
        markSum += mark;
        marksCount++;
    });
    let eachMarkSum = student.pazymiai.reduce((acc, mark) => acc + mark, 0);
    let eachStudAvg = eachMarkSum / student.pazymiai.length;
    console.log(`${student.vardas} ${student.pavarde} ${eachStudAvg.toFixed(2)}`);
});
const avgMark = markSum / marksCount;
const ageAvg = ageSum / count;
console.log('------------')
console.log('Studentu yra:', count);
console.log('Vidutinis amzius yra:', ageAvg);
console.log('Vidutinis studentu pazymis yra:', avgMark.toFixed(2));


