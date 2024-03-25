
//***********KONSTRUKTORIUS**************//

// Klases (brezinio) aprasymas
class Preke {
    kaina = 0;
    kainaSuPVM = 0;
    pavadinimas = "";

    constructor(kaina, pavadinimas) {
        // Pradiniu reiksmiu priskyrimas
        this.kaina = kaina;
        this.pavadinimas = pavadinimas;

        //Skaiciavimai ir programinis kodas kuris vykdomas kiekvieno objekto sukurimo metu
        this.kainaSuPVM = this.kaina * 1.21;
    }
}

//Nauju objektu sukurimas
const tv = new Preke(100, "Televizorius");
const pc = new Preke(500, "Kompiuteris");
tv.kainaSuPVM = tv.kaina * 1.21;
