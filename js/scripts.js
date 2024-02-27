//declares an IIFE to be used as data

const pokemonRepository = (function () {
  let pokemonList = [];

  let modalContainer = document.querySelector('#modal-container');
  let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  console.log('top of the File', apiURL);

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.style.display = 'none';
  }

  function showModal(pokemon) {
    
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal','fade');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.classList.add('btn-secondary');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', () => hideModal());


    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('img');
    contentElement.src = pokemon.imageUrl;

    let paragraphElement = document.createElement('p');
    paragraphElement.innerText = 'My height is' + pokemon.height + 'meters.'

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    // modalContainer.classList.add('is-visible');
    modalContainer.style.display = 'block'


  };

  //creates buttons to display pokemon data

  function addListItem(pokemon) {
    let htmlElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button')
    button.addEventListener('click', function () {
      showDetails(pokemon)
    });
    button.id = 'showModal';
    button.innerHTML = pokemon.name
    button.classList.add('btn', 'btn-primary', 'text-center', 'button', 'button:hover', 'button:focus');
    listItem.appendChild(button);
    listItem.classList.add('list-group-item');
    listItem.classList.add('text-center');
    listItem.classList.add('li');
    //listItem.classList.add('col-md-4');
    htmlElement.appendChild(listItem);

  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

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

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  })

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.style.display === 'block') {
      hideModal();
    }
  })


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