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
        {
            name: 'Charmander', 
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

    //creates buttons to display pokemon data

    function addListItem(pokemon){
        let htmlElement = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button').addEventListener('click', showDetails);
        button.innerText=`I am ${pokemon.name} and I am ${pokemon.height} meters tall.`
        button.classList.add('button');
        listItem.appendChild(button);
        htmlElement.appendChild(listItem);
        
    }

    function showDetails(pokemon){
        console.log(pokemon.name);

    }

    return {
        add: add, 
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    };

    })();





// forEach loop that iterates over the list 

let pokemonNameHeight = function(array) {
    array.forEach((pokemon) => {
        pokemonRepository.addListItem(pokemon);
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
            document.write(`<br> ${array[i].name} is not the tallest`);
        }
    }
}

biggestPokemon(pokemonRepository.getAll());