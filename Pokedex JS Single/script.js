let button = document.getElementById('btn');
let container = document.getElementById('pokemon-container');

let pokemonNameElement = document.createElement('h2');
let pokemonImageElement = document.createElement('img');
pokemonImageElement.style.width = "150px";
pokemonImageElement.style.height = "150px";
pokemonImageElement.style.objectFit = "contain";

container.appendChild(pokemonNameElement);
container.appendChild(pokemonImageElement);

let pokemonID = 1;

function handlePokemonData(data) {
    pokemonNameElement.textContent =
        data.name.charAt(0).toUpperCase() + data.name.slice(1);
    pokemonImageElement.src = data.sprites.front_default;
    pokemonImageElement.alt = `${data.name} image`;
}

button.addEventListener('click', async function(){
    try {
        let fetchedData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
        let data = await fetchedData.json();

        handlePokemonData(data)

        pokemonID++
        if (pokemonID > 1010) {
            pokemonID = 1
        }

    } catch(error) {
        console.log(error);
    }
})


