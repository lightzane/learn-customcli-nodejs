export const baseURL = 'https://pokeapi.co/api/v2/pokemon';

export const printFiveMoves = async (pokemonName: string) => {
  const response = await fetch(`${baseURL}/${pokemonName.toLowerCase()}`);

  if (!response.ok) {
    const { status, statusText } = response;

    const result = {
      status,
      statusText,
      input: pokemonName,
    };

    console.log(JSON.stringify(result, null, 2));

    return;
  }

  const pokemon = await response.json();

  // @ts-ignore
  const moves = pokemon.moves.map(({ move }) => move.name);

  console.log(`${pokemonName.toUpperCase()} moves:`);
  console.log(moves.slice(0, 5));
};

export default {
  baseURL,
  printFiveMoves,
};
