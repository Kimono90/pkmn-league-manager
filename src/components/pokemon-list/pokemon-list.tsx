import React, { ReactElement } from 'react';
import { Pokemon } from '../../models/Pokemon';

type PokemonListProps = {
  pkmnTeam: Pokemon[];
}
export function PokemonList({ pkmnTeam } : PokemonListProps): ReactElement {
  const pokemonTeam = pkmnTeam.map((pkmn) => <div>{pkmn.name}</div>)

  return <div className="pokemon-list">
    {pokemonTeam}
  </div>

}