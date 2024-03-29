//IIFE for functions to load and process data
const pokemonRepository = (function () {
  let pokemonList = [];

  let modal= document.querySelector('.modal');

  //data from API
  let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

//function to load modal information and show it 
  function showModal(pokemon) {
    let modalBody = document.querySelector('.modal-body');
    let modalHeader = document.querySelector('.modal-header');
    modalBody.innerHTML = '';
    let modalTitle = document.querySelector('.modal-title');
    let closeButtonElement = document.querySelector('.close'); 

    let titleElement = document.createElement('h2');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('img');
    contentElement.src = pokemon.imageUrl;

    let paragraphElement = document.createElement('p');
    paragraphElement.innerText = 'Hi! I am ' + pokemon.height + ' meters tall' ;

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButtonElement);
    modalBody.appendChild(titleElement);
    modalBody.appendChild(contentElement);
    modalBody.appendChild(paragraphElement);

    
  };

  //creates buttons to display pokemon data

  function addListItem(pokemon) {
    let htmlElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button')

    button.innerHTML = pokemon.name
    button.classList.add('btn', 'btn-primary', 'btn-success', 'text-center', 'button', 'button:hover', 'button:focus');
    listItem.appendChild(button);
    button.setAttribute('data-target', '#exampleModal')
    button.setAttribute( 'data-toggle', 'modal');
    button.addEventListener('click', function (){
      showDetails(pokemon)
    } );

    listItem.classList.add('list-group-item', 'text-center', 'li');
    htmlElement.appendChild(listItem);

  }


//function that's triggered when a button is clicked
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

//promise function to fetch API
  function loadList() {
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

//promise function to unfurl details

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
    getAll: getAll,
    loadList: loadList,
    addListItem: addListItem,
  };

})();



pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    
  });
});