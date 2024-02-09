const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const pokemonName = document.getElementById("pokemon-name");
const pokemonID = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonImage = document.getElementById("pokemon-image");
const pokemonTypes = document.getElementById("types");
const pokemonHP = document.getElementById("hp");
const pokemonAtk = document.getElementById("attack");
const pokemonDef = document.getElementById("defense");
const pokemonSpAtk = document.getElementById("special-attack");
const pokemonSpDef = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");

const loadPokemon = async () => {
  try {
    const pokemonNameOrID = searchInput.value.toLowerCase();
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrID}`
    );
    const data = await response.json();
    console.log(data);
    pokemonName.textContent = data.name.toUpperCase();
    pokemonID.textContent = "#" + data.id;
    pokemonWeight.textContent = "Weight: " + data.weight;
    pokemonHeight.textContent = "Height: " + data.height;
    pokemonTypes.innerHTML = data.types
      .map((obj) => `<span>${obj.type.name.toUpperCase()}</span>`)
      .join("");
    pokemonHP.textContent = data.stats[0].base_stat;
    pokemonAtk.textContent = data.stats[1].base_stat;
    pokemonDef.textContent = data.stats[2].base_stat;
    pokemonSpAtk.textContent = data.stats[3].base_stat;
    pokemonSpDef.textContent = data.stats[4].base_stat;
    pokemonSpeed.textContent = data.stats[5].base_stat;
    pokemonImage.innerHTML = `<img id='sprite' src='${data.sprites.front_default}' alt='${data.name} front default image'/img>`;
  } catch (err) {
    alert("Pokémon not found");
    console.log(err);
  }
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loadPokemon();
});
