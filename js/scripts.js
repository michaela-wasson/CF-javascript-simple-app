//declares an IIFE to be used as data

const pokemonRepository= (function () 
{ let pokemonList =
    [
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

    function add(pokemon) {
        pokemonList.push (pokemon);
    }

    function getAll(){
        return pokemonList;
    }

    return {
        add: add, 
        getAll: getAll
    };

    })();


//forEach loop that iterates over each item in pokemon array and writes name and height

let pokemonNameHeight = function(array) {
    array.forEach((object) => {
        let sentence = `<br> I am ${object.name} and I am ${object.height} meters tall.`;
        document.write(sentence);
    })
}

pokemonNameHeight(pokemonRepository.getAll());



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

biggestPokemon(pokemonRepository.getAll());