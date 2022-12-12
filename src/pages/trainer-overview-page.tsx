import React, { ReactElement, useEffect, useState } from 'react';
import { Trainer } from '../models/Trainer';
import './trainer-overview-page.css'
import { TrainerList } from '../components/trainer-list/trainer-list';
import { getAllPokemon } from '../poke-api-gateway/poke-api-gateway';

const testTrainer = [{
  id: 1,
  name: 'Kim',
  email: 'kim.bertrand@live.com',
  phoneNumber: '064324235623',
  pkmnTeam: [
    {
      id: 1,
      name: 'bulbasaur',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
      id: 4,
      name: 'charmander',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    },
    {
      id: 7,
      name: 'squirtle',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
    },
    {
      id: 25,
      name: 'pikachu',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    },
    {
      id: 151,
      name: 'mew',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png'
    },
    {
      id: 150,
      name: 'mewtwo',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
    },
  ]
}]

export function TrainerOverviewPage(): ReactElement {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [pokemon, setPokemon] = useState();

  console.log(pokemon);

  useEffect(() => {
    setTrainers(testTrainer)
    getAllPokemon().then((result) => setPokemon(result))
  }, [])

  return (<div className="trainer-overview-page">
    <div className="trainer-overview-header">
      <h1>Official Pokemon League trainer registration</h1>
      <h3>Gotta register 'em all</h3>
    </div>
    <div className="poke-ball-container">
      <div className="poke-ball" />
    </div>
    <TrainerList trainers={trainers} />
  </div>)

}