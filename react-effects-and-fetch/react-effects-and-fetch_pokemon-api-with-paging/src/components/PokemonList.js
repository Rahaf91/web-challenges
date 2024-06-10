/*Open the file `./src/components/PokemonList.js`.

There is a button to show the next page, but it has no functionality yet. Try to find a way to load the next page.

> _Hint 1:_ You need a way to store which page you are displaying right now and be able to update this value to the next page.

> _Hint 2:_ Have a look at the URL parameter `?offset=` used for `fetch`. The API starts by giving you the first `20` Pokémon. In the end the URL needs to change. You can either keep track of the offset yourself, or use the value given and `next` in the API response.

### The "Previous Page" button

Can you adopt your solution for the button to show the previous page?

You might experience that the app crashes when you are on the first page and click on the "Previous Page" button. Can you find a way to hide the button on the first page?

> _Hint:_ There is also a `previous` value given in the API response.*/

import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [Url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(Url);
        const data = await response.json();
        setPokemon(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [Url]);
  if (!pokemon.results) {
    return <p>...loading </p>;
  }
  return (
    <main>
      <button
        type="button"
        onClick={() => {
          setUrl(pokemon.previous);
        }}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setUrl(pokemon.next);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
