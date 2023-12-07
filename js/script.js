//SNACK 1
let biciclette = [
    {
        nome: "Atala", 
        peso: 13,
    },
    {
        nome: "Basso", 
        peso: 17,
    },
    {
        nome: "Bianchi", 
        peso: 8,
    },
    {
        nome: "Fantic", 
        peso: 19,
    },
    {
        nome: "Triestina", 
        peso: 12,
    },
    {
        nome: "Olympia", 
        peso: 14,
    },
    {
        nome: "Brinke Bike", 
        peso: 16,
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

    for (let i = 0; i < nomi_squadre.lenght; i++) {
        let squadra = {
            nome: nomi_squadre[i],
            falli: Math.floor( Math.random() * 100),
            punti: Math.floor( Math.random() * 100),
            
        };
        squadre.push(squadra);
    }
    return squadre;
}

function stampaSquadre(...squadre) {
    console.log("Squadre:");
    squadre.forEach(squadra => {
        let {nome, punti, falli} = squadra;
        console.log(`${nome},Falli : ${falli} ,Punti: ${punti}, `);
    });
}

let squadre = generaSquadre();
stampaSquadre(...squadre);