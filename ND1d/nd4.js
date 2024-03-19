/*
    Užduotis 4(For):
Skaičius, sudarytas iš trijų skaitmenų, vadinamas Armstrongo skaičiumi,
 jei jo skaitmenų, pakeltų 3 - uoju laipsniu, suma lygi pačiam skaičiui.
 Raskite visus Amstrongo skaičius esančius intervale nuo 100 iki 999.
*/

for (let i = 100; i <= 999; i++) {
    let count = i;
    let y = i.toString().length;
    let sum = 0;
    while (count > 0) {
        const x = count % 10;
        count = parseInt(count / 10);
        sum += x ** y;
    }
    if (sum == i) {
        console.log(i);
    }
}