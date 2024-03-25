// # tampa privatus kintamasis
// get ir set 

class Preke2 {
    #kaina = 0;
    pavadinimas = "";

    constructor(kaina, pavadinimas) {
        // Pradiniu reiksmiu priskyrimas
        this.kaina = kaina;
        this.pavadinimas = pavadinimas;
    }

    isvesti() {
        return `Prekes pavadinimas ${this.pavadinimas}, ${this.kaina} EUR`;
    }
    //Graziname kaina su PVM
    //Getter
    get kainaSuPVM() {
        return this.#kaina * 1.21;
    }
    //Setteris
    set kaina(k) {
        if (k - this.#kaina < 10) {
            this.#kaina = k;
        }
    }
    get kaina() {
        return this.#kaina;
    }
}

//Nauju objektu sukurimas
const tv = new Preke2(100, "Televizorius");
const pc = new Preke2(500, "Kompiuteris");

// Isvedame televizoriu
console.log(tv.isvesti());
//Pakeiteme kaina
tv.kaina = 205;
console.log(tv.isvesti());

//Isvedame PC
//console.log(pc.kainaSuPVM());

let kainuSuma = tv.kainaSuPVM + pc.kainaSuPVM;