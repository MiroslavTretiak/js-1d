/*
Panaudodami Frankfurter.app API sukurkite JS programą kuri atliktų
 valiutos kurso keitimą. API aprašas pateikiamas čia:
 https://www.frankfurter.app/docs/ . Iškviečiant Jūsų aplikaciją
 turime nurodyti į kokią valiutą norime konvertuoti ir kokią sumą
 (konvertavimas visą laiką bus vykdomas iš EUR į kažką).
 Jūsų aplikacija turi išvesti valiutos kursą
 (kiek kainuoja iškeisti vieną EUR į tą valiutą)
 ir kiek gausime nurodytos valiutos už pateiktą sumą.
 Pavyzdžiui jei programą iškviestumėme taip:

node currency.js NOK 150

Programa turėtų išvesti:

NOK kursas: 11.5

150 EUR => 1725 NOK
*/

async function convertCurrency(currency, amount) {
    try {
        let response = await fetch(`https://api.frankfurter.app/latest?from=EUR&to=${currency}`);
        response = await response.json();
        const rate = response.data.rate[currency];
        const convertedAmount = (rate * amount).toFixed(2);
        console.log(`${currency} kursas: ${rate}`);
        console.log(`${amount} EUR => ${convertedAmount} ${currency}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}
const currency = process.argv[2];
const amount = parseFloat(process.argv[3]);

convertCurrency(currency, amount);