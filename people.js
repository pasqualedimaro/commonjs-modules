//importo i due valori nelle costanti con require

const fullName = require("./names");
const hobbies = require("./hobbies")

//creo una funzione senza parametri ma con le funzioni che ho importato

function person(){
    const fullNames = fullName("Pasquale", "Di Maro");
    const hobby = hobbies("Giocare ai videogiochi", "Leggere Manga", "Ascoltare musica");
    return{
        fullNames, hobby
    };
}

// mostro log
const people = person()
console.log(people);
