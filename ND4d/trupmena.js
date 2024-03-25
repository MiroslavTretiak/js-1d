/*
Užduotis „Trupmenos“

1.Sukurkime klasę Trupmena, ją turėtų sudaryti trys atributai:
sveikojiDalis, skaitiklis, daliklis

2. Sukurkime klasei setter‘ius ir getter‘ius

3. Klasei Trupmena sukurkime metodą toString kuris gražintų trupmeną tokiu formatu:
sveikojiDalis skaitiklis/daliklis (pvz.: 1 2/5)

4.Ištestuokime programinį kodą sukurdami objektą,
 suteikime kintamiesiems reikšmes ir išveskime rezultatą.

5.Sukurkime metodą: pridetiInt(sveikasisSkaicius) kuris pridėtų sveikąjį
 skaičių prie trupmenos, ištestuokime pakoreguotą kodą.

6. Sukurkite dar vieną papildomą metodą:
 prideti(sveikasisSkaicius,  skaitiklis, vardiklis).
 Nepamirškite jog pridedant skaičių reikia subendravardiklinti).

7. Sukurkime metodą pridetiTrupmena(x), šis metodas turės
 prie esamos trupmenos pridėti paduotą trupmeną. Nepamirškite jog
 taip pat po šio veiksmo reikės suprastinti trupmeną.

8. Sukurkime metodą toDouble() kuris grąžintų esamą
 trupmenos reikšmę realiuoju skaičiumi (per kablelį).

Papildomai padarykite:
Sukurkime metodą prastinti(), jis turėtų suprastinti trupmeną. Metodą padarykime matomą tik pačiam objektui (jis turi būti nepasiekiamas iš išorės).
Padarykime jog po kiekvieno seterio ir po pridėjimo metodų įvykdymo būtų iškviečiamas prastinimo metodas.
*/

class Trupmena {
    //Atributai
    #sveikojiDalis = 0;
    #skaitiklis = 0;
    #daliklis = 0;
    constructor(sveikojiDalis, skaitiklis, daliklis) {
        this.#sveikojiDalis = sveikojiDalis;
        this.#skaitiklis = skaitiklis;
        this.#daliklis = daliklis;
    }
    //Getteriai ir setteriai
    get sveikojiDalis() {
        return this.#sveikojiDalis;
    }
    set sveikojiDalis(x) {
        this.#sveikojiDalis = x;
    }
    get skaitiklis() {
        return this.#skaitiklis;
    }
    set skaitiklis(y) {
        this.#skaitiklis = y;
    }
    get daliklis() {
        return this.#daliklis;
    }
    set daliklis(z) {
        this.#daliklis = z;
    }
    //Metodas to string
    toString() {
        return `${this.sveikojiDalis} ${this.#skaitiklis}/${this.daliklis}`
    }
    //Metodas prideti skaiciu pride trupmenos
    pridetiInt(sveikasisSkaicius) {
        this.sveikojiDalis += sveikasisSkaicius;
    }
    prideti(sveikasisSkaicius, skaitiklis, vardiklis) {
        const bendrasVardiklis = this.#daliklis * vardiklis;
        const naujasSkaitiklis1 = this.#skaitiklis * (bendrasVardiklis / this.#daliklis);
        const naujasSkaitiklis2 = skaitiklis * (bendrasVardiklis / vardiklis);
        this.#sveikojiDalis += sveikasisSkaicius;
        this.#skaitiklis = naujasSkaitiklis1 + naujasSkaitiklis2;
        this.#daliklis = bendrasVardiklis;
    }
    pridetiTrumpena(x) {

        this.prideti(x.sveikojiDalis, x.skaitiklis, x.daliklis);

        if (this.#skaitiklis >= this.#daliklis) {
            this.#sveikojiDalis += Math.floor(this.#skaitiklis / this.#daliklis);
            this.#skaitiklis %= this.#daliklis;
        }
        return `${this.#sveikojiDalis} ${this.#skaitiklis}/${this.#daliklis}`;
    }
    toDouble() {
        return this.#sveikojiDalis + this.#skaitiklis / this.#daliklis
    }
}


// 4.Ištestuokime programinį kodą sukurdami objektą,
//     suteikime kintamiesiems reikšmes ir išveskime rezultatą.

const a = new Trupmena(1, 2, 5);
console.log(a.toString());

// 5.Sukurkime metodą: pridetiInt(sveikasisSkaicius) kuris pridėtų sveikąjį
//  skaičių prie trupmenos, ištestuokime pakoreguotą kodą.

a.pridetiInt(5);
console.log(a.toString());

// 6. Sukurkite dar vieną papildomą metodą:
// prideti(sveikasisSkaicius, skaitiklis, vardiklis).
//  Nepamirškite jog pridedant skaičių reikia subendravardiklinti).

const b = new Trupmena(2, 2, 5);
a.prideti(b.sveikojiDalis, b.skaitiklis, b.daliklis);
console.log(a.toString());

// 7. Sukurkime metodą pridetiTrupmena(x), šis metodas turės
//  prie esamos trupmenos pridėti paduotą trupmeną.Nepamirškite jog
//  taip pat po šio veiksmo reikės suprastinti trupmeną.

const c = new Trupmena(0, 20, 5);
a.pridetiTrumpena(c);
console.log(a.toString());

// 8. Sukurkime metodą toDouble() kuris grąžintų esamą
//  trupmenos reikšmę realiuoju skaičiumi(per kablelį).

console.log(a.toDouble())
