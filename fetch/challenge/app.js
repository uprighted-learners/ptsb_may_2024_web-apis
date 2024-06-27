/*
?    Challenge:
      - Grab a hold of the HTML elements that are necessary.
      - Use the https://pokeapi.co/ to retrieve the information of a pokemon
      - Then using the input field, a user should be able to type in the pokemon name or number.


      * HINT: There is a method you can use to grab hold of the value contained within the input field
      - The button with the text of "Look", should execute a fetch to the PokeAPI.
      The API should return the exact data for the pokemon-name/# that was provided to the input field.

      You will only need to fetch to one endpoint.

      - Display the results within each respected html element
        * Be sure to understand the data type you are working with to display the results correctly *
        - Name
        - Image
        - Stats
        - Moves

      BONUS:
      - When the user goes and types in another pokemon-name/#, the moves and stats keep stacking new data on top of the data that was previously received. 
      Handle clearing out the past data to present the new data
*/

let searchButton = document.querySelector(".btn");
let searchInput = document.querySelector(".search");

let pokeName = document.querySelector(".name");
let pokeImg = document.querySelector("#img-avatar");

let pokeMoves = document.querySelector(".moves");
let pokeStats = document.querySelector(".stats");

let prevButton = document.querySelector("#prev");
let nextButton = document.querySelector("#next");

searchButton.addEventListener("click", () => {
  getPokemon(searchInput.value);
});

prevButton.addEventListener("click", () => {
  let input = searchInput.value;
  searchInput.value = parseInt(input) - 1;
  getPokemon(parseInt(input) - 1);
});

nextButton.addEventListener("click", () => {
  let input = searchInput.value;
  searchInput.value = parseInt(input) + 1;
  getPokemon(parseInt(input) + 1);
});

const getPokemon = async (pokemonId) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const result = await response.json();
    let name = result.name;
    let sprite = result.sprites.front_default;
    let moves = result.moves;
    let stats = result.stats;
    let pokemonObj = {
      name: name,
      stats: stats,
      img: sprite,
      moves: moves,
    };
    displayPokemon(pokemonObj);

    if (result.id === 1) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "inline-block";
    }

    if (result.id === 1025) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "inline-block";
    }
  } catch (err) {
    pokeName.textContent = "Sorry, an error has occurred";
  }
};

const displayPokemon = (pokemon) => {
  pokeName.textContent = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  pokeImg.src = pokemon.img;

  // Clearing out past results that were appended
  while (pokeStats.firstChild) {
    pokeStats.removeChild(pokeStats.firstChild);
  }
  while (pokeMoves.firstChild) {
    pokeMoves.removeChild(pokeMoves.firstChild);
  }

  // Populating new results
  pokemon.stats.forEach((i) => {
    let statName = document.createElement("p");
    statName.textContent = i.base_stat + " " + i.stat.name;
    pokeStats.appendChild(statName);
  });

  pokemon.moves.forEach((i) => {
    let moveName = document.createElement("li");
    moveName.textContent = i.move.name;
    pokeMoves.appendChild(moveName);
  });
};
