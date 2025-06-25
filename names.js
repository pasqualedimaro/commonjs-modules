// creo la funzione che da due parametri nome e cognome

function fullName(firstName, lastName) {
    return{
        firstName: firstName, 
        lastName: lastName
    };
    
}

// esporto la funzione

module.exports = fullName;