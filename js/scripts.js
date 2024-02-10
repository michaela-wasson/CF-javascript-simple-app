//declares an IIFE to be used as data

const pokemonRepository= (function () 
{ let pokemonList =
    [ ]; 

    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    console.log('top of the File', apiURL);

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
        let button = document.createElement('button')
        button.addEventListener('click', function () {
            showDetails(pokemon)
        });
        button.classList.add('button');
        listItem.appendChild(button);
        htmlElement.appendChild(listItem);
        
    }

    function showDetails(pokemon){
        loadDetails(pokemon).then(function () {
            console.log(pokemon)
 
        });
    }

    function loadList() {
        console.log('loadList', apiURL);
        let url = apiURL; 

        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }
    
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }
    

    return {
        add: add, 
        getAll: getAll,
        loadList: loadList,
        addListItem: addListItem,
        showDetails: showDetails, 
        loadDetails: loadDetails
    };

    })();




pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
        });
      });

    
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

