//importo i due valori nelle costanti con require

const fullName = require("./names");
const hobbies = require("./hobbies")

//creo una funzione senza parametri ma con le funzioni che ho importato

const people = {
    fullNames: fullName( "Pasquale", "Di Maro"),
    hobby: hobbies("Giocare ai Videogiochi", "Leggere Manga", "Ascoltare musica")

}

// mostro log
console.log(people);
