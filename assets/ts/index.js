function main() {
    console.log('esercizio typescript numero 1.');
    var same = numeroGiocatore1 == numeroGiocatore2;
    console.log('Giocatore 1: ' + numeroGiocatore1);
    console.log('Giocatore 2: ' + numeroGiocatore2);
    console.log('numero estratto: ' + numeroEstratto);
    if (same) {
        var value = numeroGiocatore1;
        if (value == numeroEstratto) {
            console.log('Vincono Entrambe i giocatori.');
        }
        else {
            console.log('Nessun vincitore, entrambe i giocatori si avvicinano alla pari.');
        }
    }
    else {
        if (numeroGiocatore1 == numeroEstratto) {
            console.log('Vince il giocatore 1');
        }
        else if (numeroGiocatore2 == numeroEstratto) {
            console.log('Vince il giocatore 2');
        }
        else {
            var delta1 = Math.abs(numeroEstratto - numeroGiocatore1);
            var delta2 = Math.abs(numeroEstratto - numeroGiocatore2);
            var stringa = delta1 < delta2 ? 'giocatore1' : 'giocatore2';
            console.log('si avvicina di più il ' + stringa);
        }
    }
}
var numeroGiocatore1;
var numeroGiocatore2;
var numeroEstratto;
function estrai() {
    return Math.floor(Math.random() * 100 + 1);
}
numeroGiocatore1 = estrai();
numeroGiocatore2 = estrai();
numeroEstratto = estrai();
main();
