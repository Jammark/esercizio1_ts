function main():void{
    console.log('esercizio typescript numero 1.');
    let same : boolean = numeroGiocatore1 == numeroGiocatore2;
    console.log('Giocatore 1: ' + numeroGiocatore1);
    console.log('Giocatore 2: ' + numeroGiocatore2);
    console.log('numero estratto: ' + numeroEstratto);
    if(same){
        let value = numeroGiocatore1;
        if(value == numeroEstratto){
            console.log('Vincono Entrambe i giocatori.');
        }else{
            console.log('Nessun vincitore, entrambe i giocatori si avvicinano alla pari.');
        }
    }else{
        if(numeroGiocatore1 == numeroEstratto){
            console.log('Vince il giocatore 1');
        }else if(numeroGiocatore2 == numeroEstratto){
            console.log('Vince il giocatore 2');
        }else{
            let delta1 : number = Math.abs(numeroEstratto - numeroGiocatore1);
            let delta2 : number = Math.abs(numeroEstratto - numeroGiocatore2);
            let stringa : string = delta1 < delta2 ? 'giocatore1' : 'giocatore2';
            console.log('si avvicina di più il ' + stringa);
        }
    }
}



var numeroGiocatore1 : number;
var numeroGiocatore2 : number;
var numeroEstratto : number;

function estrai():number{
    return Math.floor(Math.random() * 100 + 1);
}

numeroGiocatore1 = estrai();
numeroGiocatore2 = estrai();
numeroEstratto = estrai();

main();

