//declares an array of pokemon to be used as data

let pokemonList=[
    {
    name:'Bulbasaur', 
    height: 0.7,
    types: ['grass', 'poison']
    },
    {
    name: 'Ivysaur', 
    height: 1.0, 
    types: ['grass', 'poison'] 
    }, 
    {name: 'Charmander', 
    height: 0.6, 
    types: ['fire']
    }, 
    {
    name:'Blastoise', 
    height: 1.6, 
    types: ['water'] 
    }, 
    {
    name: 'Beedrill', 
    height: 1, 
    types: ['bug', 'poison']
    }, 
    {
    name: 'Pikachu', 
    height: 0.4, 
    types: ['electric']
    }, 
    {
    name: 'Persian', 
    height: 1, 
    types: ['normal']
    }
];

//for loop that iterates over each item in pokemon array and writes name

let pokemonNameHeight = function( array){
    for(let i=0; i < array.length; i ++ ){
        document.write(' ')
        document.write(`<br> ${array[i].name} height: ${array[i].height}.` )
        
    }
}

pokemonNameHeight(pokemonList);


document.write('<br>')



//using while loop to add note to highlight the biggest pokemon in the list 
let biggestPokemon = function (array){
    document.write("We're looking for a tall pokemon!");
    for (let i = 0; i < array.length; i++) {
        if (array[i].height === 1.6) {
            document.write(`<br> ${array[i].name + array[i].height}. Wow, that's big!\n`);

        } else {
            document.write(`<br> ${array[i].name} not the tallest`);
        }
    }
}

biggestPokemon(pokemonList);











