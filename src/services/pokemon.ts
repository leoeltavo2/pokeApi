// Obtener el pokemon
export const getPokemon = async({name}: { name: String }) => {
    const pokemonDetails = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const detail = await pokemonDetails.json();    
    return detail;
}

// Obtener el texto del pokemon 
export const getPokemonSpecie = async({id}: { id: number }) => {
    const pokemonSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const specie = await pokemonSpecies.json(); 
    return specie;
}

// Obtener el lenguage
export const getLanguage = async({id}: { id: number }) => {
    const languages = await fetch(`https://pokeapi.co/api/v2/language/${id}`);
    const language = await languages.json(); 
    return language;
}

// Obtener la lista de pokemon
export const getPokemonList = async() => {
    const allPokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    const data = await allPokemon.json();
    const pokemonList = data.results;
    return pokemonList;
}