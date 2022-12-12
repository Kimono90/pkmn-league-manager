import React, { ReactElement } from 'react';
import { Pokemon } from '../../models/Pokemon';
import './pokemon-list.css'

type PokemonListProps = {
  pkmnTeam: Pokemon[];
}
export function PokemonList({ pkmnTeam } : PokemonListProps): ReactElement {
  const pokemonTeam = pkmnTeam.map((pkmn) => <div key={pkmn.id} className="pokemon-item">
    <span>#{pkmn.id} - {pkmn.name}</span>
    <div style={{width: '5rem', height: '5rem', backgroundImage: `url(${pkmn.imgUrl})`, backgroundSize: 'auto', backgroundPosition: 'center'}} />
  </div>)

  return <div className="pokemon-list">
    {pokemonTeam}
  </div>

}