// 2.Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


//L utente sceglie tra pari e dispari
let pari_o_dispari = prompt('Scegli tra pari o dispari');
//L utente sceglie un numero da 1 a 5
let user_nmb = Number(prompt('Scegli un numero da 1 a 5'));
//Numero random per il pc
let pc_nmb = Number(getRandomIntInclusive(1,5));
console.log(pc_nmb);
//somma dei dui numeri scelti
let sum_nmb = pc_nmb + user_nmb;

//Funzione per generare numero intero
function getRandomIntInclusive(min,max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//condizioni per numero pari / dispari
if (sum_nmb % 2 == 0){
    console.log(`${sum_nmb} 'questo numero è pari'`);   
}else {
    console.log(`${sum_nmb} 'questo numero è dispari'`);
}