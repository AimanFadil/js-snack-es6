//SNACK 1
let biciclette = [
    {
        nome: "Atala", 
        peso: 10,
    },
    {
        nome: "Basso", 
        peso: 11.0
    },
    {
        nome: "Bianchi", 
        peso: 8.0
    },
    {
        nome: "Fantic", 
        peso: 10.0
    },
    {
        nome: "Triestina", 
        peso: 10,
    },
    {
        nome: "Olympia", 
        peso: 10,
    },
    {
        nome: "Brinke Bike", 
        peso: 10,
    },
];

let peso_minore = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
    if (biciclette[i].peso < peso_minore.peso) {
        peso_minore = biciclette[i];
    }
}

console.log(`La bicicletta meno pesante è ${peso_minore.nome} dal peso di ${peso_minore.peso} kg`);

//SNACK

function generaSquadre() {
    let squadre = [];
    let nomi_squadre = ["Real Madrid", "Barcellona", "Manchester city", "Paris Saint Germain", "Bayern Monaco", "Milan", "Inter", "Ajax", "Chelsea", "Crotone", "Ascoli"];

    
}

