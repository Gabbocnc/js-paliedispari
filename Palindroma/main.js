
// 1. Palidroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


//Diachiaro la richiesta da fare all utente
let user_word = prompt('Inseriesci una Parola')
let word_user = reverse_word(user_word)

//condizioni
if (user_word == word_user) {
    console.log("La parola è palindroma");
   }else {
    console.log("La parola non è palindroma");
}
   
//funzione
//assegno nome della funzione + paramentro 
function reverse_word(word) {
    //Dichiaro variabile
    let  word_reverse = "";
    //Ciclo for che parte dall ultima lettera della parola e continua fino alla lettera indice 0
    for (let i = word.length -1; i >= 0; i--) {
      word_reverse += word[i]
    }
    //Restituisco il risultato 
    return word_reverse;
}
